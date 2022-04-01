import string #Utilizado para generar el abecedario
import re     #Utilizado para verificar formatos correctos
from datetime import date  #Utilizado para obtener el dia actual
from classes import *   #Importar todas las clases que estan dentro de classes

#Variables globales
ABC = list(string.ascii_uppercase)
ABC.append("Ñ")
Options = ["A","B", "S"]
Socios = []
today = date.today()

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
            print("Por favor Seleccione una opción correcta") #Cambiar color
        print("***********************")
        print("Registrar Cliente -------------------A")
        print("Actualizar Categoria  ----------------B")
        print("Salir -----------------------------S")
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
        AddClient()
    elif num == 1:
        print("Opcion b")
    #sigue....

def AddClient():
    while True:
        band = False
        Name  = input("Ingrese nombre: ")
        for i in Name:
            if i.upper() not in ABC:    #Verificar si cada letra del nombre corresponde a alguna del abecedario
                print("Ingrese un nombre valido")
                band = True
                break
        if band == False:
            break
    
    while True:
        band = False
        LastName  = input("Ingrese apellido: ")
        for i in LastName:
            if i.upper() not in ABC:    #Verificar si cada letra del nombre corresponde a alguna del abecedario
                print("Ingrese un apellido valido")
                band = True
                break
        if band == False:
            break

    while True:
        try:
            Dni = int(input("Ingrese DNI: "))
        except ValueError:                              #Si la entreda no es int salta este error
            print("El Dni debe ser un numero")
            continue
        if Dni < 0:
            print("El DNI no puede ser negativo")
            continue
        else:
            break
    
    while True:
        DateOfBirth = input("Ingrese fecha de nacimiento (DD-MM-YYYY): ")
        if (re.match("^[0-9]{2}-[0-9]{2}-[0-9]{4}$",DateOfBirth)):    #Verificar que sea el formato adecuado
            SplitDate = DateOfBirth.split("-")
            if (today.year < int(SplitDate[2])):                  #verificar que sea una fecha pasada
                print("Ingrese un formato valido de fecha")
                continue
            elif (today.month < int(SplitDate[1]) and today.year <= int(SplitDate[2])):
                print("Ingrese un formato valido de fecha")
            elif (today.day < int(SplitDate[0]) and today.month <= int(SplitDate[1]) and today.year <= int(SplitDate[2])):
                print("Ingrese un formato valido de fecha")
            else:
                break
        else:
            print("Ingrese un formato valido de fecha")
    Address = input("Ingrese dirección (nombre-numero): ")
    while True:
        band = False
        Locality  = input("Ingrese localidad: ")
        for i in Locality:
            if i.upper() not in ABC:    #Verificar si cada letra del nombre corresponde a alguna del abecedario
                print("Ingrese una localidad valida")
                band = True
                break
        if band == False:
            break
    while True:
        try:
            PhoneNumber = int(input("Ingrese numero de telefono: "))
        except ValueError:                              #Si la entreda no es int salta este error
            print("El telefono debe ser un numero")
            continue
        if PhoneNumber < 0:
            print("El telefono no puede ser negativo")
            continue
        else:
            break
    Email = input("Ingrese Email: ")
    Desease = input("Ingrese enfermedad: ")
    Medication = input ("Ingrese medicación: ")
    
    
    socio = Socio(Name,LastName,Dni,DateOfBirth,Address,Locality,PhoneNumber,Email,Desease,Medication)       #Crear el objeto socio
    Socios.append(socio)            #guardar el objeto dentro de una lista para mantenerlo
    









main()

print("ok")

