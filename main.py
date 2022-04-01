import string #Utilizado para generar el abecedario
import re     #Utilizado para verificar formatos correctos
from datetime import *  #Utilizado para obtener el dia actual
from classes import *   #Importar todas las clases que estan dentro de classes

#Variables globales
ABC = list(string.ascii_uppercase)
ABC.append("Ñ")
Options = ["A","B", "S"]
Socios = []
today = date.today()

#Inicializar los tipos de sangre
TypeA = Sangre("A")
TypeB = Sangre("B")
TypeAB = Sangre("AB")
TypeO = Sangre("O")

#Inicializar los tipos de categoria
Active = Categoria("Activo",13250.45)
Pasive = Categoria("Pasivo",78740.25)

#Inicializar socios
socio1 = Socio("Nicolas","Cabrera",43675293,"2001/11/25","belgrano 993","San Fco",15583576,"nicolascab993@gmial.com","S","S","O",Pasive)
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
        DateOfBirth = input("Ingrese fecha de nacimiento (YYYY/MM/DD): ")
        if (re.match("^[0-9]{4}/[0-9]{2}/[0-9]{2}$",DateOfBirth)):    #Verificar que sea el formato adecuado
            SplitDate = DateOfBirth.split("/")
            if (today.year < int(SplitDate[0])):                  #verificar que sea una fecha pasada
                print("Ingrese un formato valido de fecha")
                continue
            elif (today.month < int(SplitDate[1]) and today.year <= int(SplitDate[0])):
                print("Ingrese un formato valido de fecha")
            elif (today.day < int(SplitDate[2]) and today.month <= int(SplitDate[1]) and today.year <= int(SplitDate[0])):
                print("Ingrese un formato valido de fecha")
            elif (int(SplitDate[0]) <= 1900 or int(SplitDate[1]) < 1 or int(SplitDate[1]) > 12 or int(SplitDate[2]) < 1 or int(SplitDate[2]) > 31):
                print("Ingrese una fecha valida")
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
    
    while True:    
        Email = input("Ingrese Email: ")
        if (re.match("^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$",Email)):
            break
        else:
            print("Ingrese un email valido")
    while True:
        Desease = input("Ingrese enfermedad (S/N): ")
        if Desease.upper() != "S" and Desease.upper() != "N":
            print("Ingrese una respuesta valida")
        else:
            break
    
    while True:    
        Medication = input ("Ingrese medicación (S/N): ")
        if Medication.upper() != "S" and Medication.upper() != "N":
            print("Ingrese un respuesta valida")
        else: 
            break
    while True:   
        BloodType = input("Ingrese el tipo de sangre")
        if BloodType.upper() not in["A","B","O","AB"]:
            print("Ingrese un tipo de sangre valido")
        else:
            break
    
    Category = DefineCategory(DateOfBirth,Desease,Medication)

    if BloodType.upper() == "A":
        socio = Socio(Name,LastName,Dni,DateOfBirth,Address,Locality,PhoneNumber,Email,Desease,Medication,TypeA,Category)
    elif BloodType.upper() == "B":
        socio = Socio(Name,LastName,Dni,DateOfBirth,Address,Locality,PhoneNumber,Email,Desease,Medication,TypeB,Category)
    elif BloodType.upper() == "AB":
        socio = Socio(Name,LastName,Dni,DateOfBirth,Address,Locality,PhoneNumber,Email,Desease,Medication,TypeAB,Category)
    elif BloodType.upper() == "O":
        socio = Socio(Name,LastName,Dni,DateOfBirth,Address,Locality,PhoneNumber,Email,Desease,Medication,TypeO,Category)
        
        #Crear el objeto socio dependiendo del tipo de sangre ingresado

    Socios.append(socio)            #guardar el objeto dentro de una lista para mantenerlo
    



def DefineCategory(DateOfBirth,Desease,Medication):
    Age = CalculateAge(DateOfBirth)
    if (Age >= 18 and Age <= 56):
        if (Desease.upper() == "S" and Medication.upper() == "S"):
            return Pasive
        else:
            return Active
    else:
        return Pasive


def CalculateAge(DateOfBirth):
    SplitDate = DateOfBirth.split("/") 
    birth = datetime(int(SplitDate[0]),int(SplitDate[1]),int(SplitDate[2]))
    age = today.year - birth.year - ((today.month, today.day) < (birth.month, birth.day))
    return age







main()
print("ok")

