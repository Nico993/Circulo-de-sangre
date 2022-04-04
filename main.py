import os
import string #Utilizado para generar el abecedario
import re     #Utilizado para verificar formatos correctos
from datetime import * #Utilizado para obtener el dia actual
from Socio import * 


os.system("color")
#Variables globales
ABC = list(string.ascii_uppercase)
ABC.append("Ñ")
ABC.append(" ")
Options = ["A","B", "S"]
Socios = []
today = date.today()




#Inicializar socios
socio1 = Socio("Nicolas","Cabrera",43675293,"2001/11/25","belgrano 993","San Fco",15583576,"nicolascab993@gmial.com","s","s", "Paracetamol","o","none")
Socios.append(socio1)

def main ():
    Cond = True
    while Cond:
            Choice = ShowMenu()
            if Choice.upper() != "S":         #Si la opcion no fue salir, entonces se continua con el proceso
                EstablishFunction(Choice)
            else:
                Cond = False

def ShowMenu():
    Cond = True
    Cond1 = False
    while Cond:
        if Cond1:
            os.system("CLS")
            print("\033[91m\nPor favor Seleccione una opción correcta\033[0;0m") #Cambiar color
        print("\033[2;30;47m\t\tCirculo de sangre\n\033[0;0m")
        print("***********************")
        print("Registrar Cliente --------------------A")
        print("Mostrar socios -----------------------B")
        print("Salir --------------------------------S")
        print("***********************")
        #mas print
        #
        #
        Choice = input("Seleccione un opción: ") #Variable choice siempre va a ser de tipo string

        for Option in Options:
            if Choice.upper() == Option:
                Cond = False

        Cond1 = True
    return Choice

def EstablishFunction(Choice):
    num = Options.index((Choice.upper()))
    
    if num == 0:
        os.system("CLS")
        AddClient()
        os.system("CLS")
    elif num == 1:
        os.system("CLS")
        ShowClients()
    #sigue....

def AddClient():
    while True:
        Name  = input("Ingrese nombre: ")
        band = VerifyString(Name)
        if band == False:
            break
        else:
            print("\033[91mIngrese un nombre valido\033[0;0m")
    
    while True:
        LastName  = input("Ingrese apellido: ")
        band = VerifyString(LastName)
        if band == False:
            break
        else: 
            print("\033[91mIngrese un apellido valido\033[0;0m")

    while True:
        band = False
        try:
            Dni = int(input("Ingrese DNI: "))
        except ValueError:                              #Si la entreda no es int salta este error
            print("\033[91mEl Dni debe ser un numero\033[0;0m")
            continue
        for i in Socios:
            if i.Dni == Dni:
                band = True
        if band:
            print("\033[91mEl DNI ya existe dentro de la base de datos\033[0;0m")
        elif Dni < 0:
            print("\033[91mEl DNI no puede ser negativo\033[0;0m")
            continue
        elif len(str(Dni)) < 7 or len(str(Dni)) > 9:
            print("\033[91mIngrese un Dni valido\033[0;0m")
        else:
            break
    
    while True:
        DateOfBirth = input("Ingrese fecha de nacimiento (YYYY/MM/DD): ")
        if (re.match("^[0-9]{4}/[0-9]{2}/[0-9]{2}$",DateOfBirth)):    #Verificar que sea el formato adecuado
            SplitDate = DateOfBirth.split("/")
            if (today.year < int(SplitDate[0])):                  #verificar que sea una fecha pasada
                print("\033[91mIngrese un formato valido de fecha\033[0;0m")
                continue
            elif (today.month < int(SplitDate[1]) and today.year <= int(SplitDate[0])):
                print("\033[91mIngrese un formato valido de fecha\033[0;0m")
            elif (today.day < int(SplitDate[2]) and today.month <= int(SplitDate[1]) and today.year <= int(SplitDate[0])):
                print("\033[91mIngrese un formato valido de fecha\033[0;0m")
            elif (int(SplitDate[0]) <= 1900 or int(SplitDate[1]) < 1 or int(SplitDate[1]) > 12 or int(SplitDate[2]) < 1 or int(SplitDate[2]) > 31):
                print("\033[91mIngrese una fecha valida\033[0;0m")
            else:
                break
        else:
            print("\033[91mIngrese un formato valido de fecha\033[0;0m")
    Address = input("Ingrese dirección (nombre-numero): ")
    while True:
        Locality  = input("Ingrese localidad: ")
        band = VerifyString(Locality)
        if band == False:
            break
        else:
            print("\033[91mIngrese una localidad valida\033[0;0m")
    while True:
        try:
            PhoneNumber = int(input("Ingrese numero de telefono: "))
        except ValueError:                              #Si la entreda no es int salta este error
            print("\033[91mEl telefono debe ser un numero\033[0;0m")
            continue
        if PhoneNumber < 0:
            print("\033[91mEl telefono no puede ser negativo\033[0;0m")
            continue
        else:
            break
    
    while True:    
        Email = input("Ingrese Email (ejemplo@dominio.com): ")
        if (re.match("^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$",Email)):
            break
        else:
            print("\033[91mIngrese un email valido\033[0;0m")
    while True:
        Desease = input("Cuenta con alguna enfermedad (S/N): ")
        if Desease.upper() != "S" and Desease.upper() != "N":
            print("\033[91mIngrese una respuesta valida\033[0;0m")
        else:
            break
    
    while True: 
        MedicationName = "none"   
        Medication = input ("Toma medicación (S/N): ")
        if Medication.upper() != "S" and Medication.upper() != "N":
            print("\033[91mIngrese un respuesta valida\033[0;0m")
        else: 
            if Medication.upper() == "S":
                MedicationName = input("Ingrese el nombre de la medicación: ")
            break
    while True:   
        BloodType = input("Ingrese el tipo de sangre: ")
        if BloodType.upper() not in["A","B","O","AB"]:
            print("\033[91mIngrese un tipo de sangre valido\033[0;0m")
        else:
            break
    while True:    
        Terms = input ("¿El cliente acepta los terminos? (S/N): ")
        if Terms.upper() != "S" and Terms.upper() != "N":
            print("\033[91mIngrese un respuesta valida\033[0;0m")
        else: 
            break
    if Terms.upper() == "S":
        socio = Socio(Name,LastName,Dni,DateOfBirth,Address,Locality,PhoneNumber,Email,Desease,Medication,MedicationName,BloodType,"none") #Crear el objeto socio dependiendo del tipo de sangre ingresado

        Socios.append(socio)            #guardar el objeto dentro de una lista para mantenerlo
    


def VerifyString(Input):
    band = False
    for i in Input:
        if i.upper() not in ABC:    #Verificar si cada letra del nombre corresponde a alguna del abecedario
            band = True
            break
    return band


def ShowClients():
    j = 1
    for i in Socios:
        print(f"\033[95m\nSocio N° {j}:\033[0;0m")
        print(i)
        j = j + 1


main()
print("ok")

