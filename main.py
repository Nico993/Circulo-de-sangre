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
        print("Registrar Socio ----------------------A")
        print("Mostrar Socios -----------------------B")
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
        AddSocio()
        os.system("CLS")
    elif num == 1:
        os.system("CLS")
        ShowSocios()
    #sigue....

def AddSocio():
    while True:
        Nombre  = input("Ingrese nombre: ")
        band = VerifyString(Nombre)
        if band == False:
            break
        else:
            print("\033[91mIngrese un nombre valido\033[0;0m")
    
    while True:
        Apellido  = input("Ingrese apellido: ")
        band = VerifyString(Apellido)
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
        FechaNacimiento = input("Ingrese fecha de nacimiento (YYYY/MM/DD): ")
        if (re.match("^[0-9]{4}/[0-9]{2}/[0-9]{2}$",FechaNacimiento)):    #Verificar que sea el formato adecuado
            SplitDate = FechaNacimiento.split("/")
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
    Domicilio = input("Ingrese domicilio (nombre-numero): ")
    while True:
        Localidad  = input("Ingrese localidad: ")
        band = VerifyString(Localidad)
        if band == False:
            break
        else:
            print("\033[91mIngrese una localidad valida\033[0;0m")
    while True:
        try:
            Telefono = int(input("Ingrese numero de telefono: "))
        except ValueError:                              #Si la entreda no es int salta este error
            print("\033[91mEl telefono debe ser un numero\033[0;0m")
            continue
        if Telefono < 0:
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
        Enfermedad = input("Cuenta con alguna enfermedad (S/N): ")
        if Enfermedad.upper() != "S" and Enfermedad.upper() != "N":
            print("\033[91mIngrese una respuesta valida\033[0;0m")
        else:
            break
    
    while True: 
        NombreMedicamento = "none"   
        Medicamentos = input ("Toma medicamentos (S/N): ")
        if Medicamentos.upper() != "S" and Medicamentos.upper() != "N":
            print("\033[91mIngrese un respuesta valida\033[0;0m")
        else: 
            if Medicamentos.upper() == "S":
                NombreMedicamento = input("Ingrese el nombre de la medicación: ")
            break
    while True:   
        NombreTipoSangre = input("Ingrese el tipo de sangre: ")
        if NombreTipoSangre.upper() not in["A","B","O","AB"]:
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
        socio = Socio(Nombre,Apellido,Dni,FechaNacimiento,Domicilio,Localidad,Telefono,Email,Enfermedad,Medicamentos,NombreMedicamento,NombreTipoSangre,"none") #Crear el objeto socio dependiendo del tipo de sangre ingresado

        Socios.append(socio)            #guardar el objeto dentro de una lista para mantenerlo
    


def VerifyString(Input):
    band = False
    for i in Input:
        if i.upper() not in ABC:    #Verificar si cada letra del nombre corresponde a alguna del abecedario
            band = True
            break
    return band


def ShowSocios():
    j = 1
    for i in Socios:
        print(f"\033[95m\nSocio N° {j}:\033[0;0m")
        print(i)
        j = j + 1


main()
print("ok")

