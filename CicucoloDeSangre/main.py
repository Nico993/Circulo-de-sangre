import os
from datetime import * #Utilizado para obtener el dia actual
from Socio import * 
from Validacion import Validacion
from Peticion import *
from Donacion import *


os.system("color")
#Variables globales
Options = ["A","B","C","D","S"]
Validador = Validacion()
today = date.today()




#Inicializar socios
socio1 = Socio("Nicolas","Cabrera",43675293,"2001/11/25","belgrano 993","San Fco",15583576,"nicolascab993@gmial.com","n","n", "Paracetamol","b","none")
socio2 = Socio("Pablo","Rodas",43675897,"2001/01/30","Roca 1856","Brk",15693578,"pablorodas@gmail.com","n","n","none","b","none")
Socios.append(socio1)
Socios.append(socio2)

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
        print("Registrar Socio -----------------------------A")
        print("Mostrar Socios ------------------------------B")
        print("Gestionar peticion --------------------------C")
        print("Salir ---------------------------------------S")
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
    elif num == 2:
        os.system("CLS")
        MenuGestionarPeticion()
    #sigue....

def AddSocio():
    while True:
        Nombre  = input("Ingrese nombre: ")
        band = Validador.VerificarString(Nombre)
        if band == False:
            break
        else:
            print("\033[91mIngrese un nombre valido\033[0;0m")
    
    while True:
        Apellido  = input("Ingrese apellido: ")
        band = Validador.VerificarString(Apellido)
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
        band = Validador.VerificarFechaNacimiento(FechaNacimiento)
        if band:
            break
    Domicilio = input("Ingrese domicilio (nombre-numero): ")
    while True:
        Localidad  = input("Ingrese localidad: ")
        band = Validador.VerificarString(Localidad)
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
        band = Validador.VerificarEmail(Email)
        if band:
            break
    while True:
        Enfermedad = input("Cuenta con alguna enfermedad (S/N): ")
        band = Validador.VerificarSiNo(Enfermedad)
        if band:
            break
    
    while True: 
        NombreMedicamento = "none"   
        Medicamentos = input ("Toma medicamentos (S/N): ")
        band = Validador.VerificarSiNo(Medicamentos)
        if band:
            if Medicamentos.upper() == "S":
                NombreMedicamento = input("Ingrese el nombre de la medicación: ")
            break
    while True:   
        NombreTipoSangre = input("Ingrese el tipo de sangre: ")
        band = Validador.VerificarSangre(NombreTipoSangre)
        if band:
            break
    while True:    
        Terms = input ("¿El cliente acepta los terminos? (S/N): ")
        band = Validador.VerificarSiNo(Terms)
        if band:
            break
    if Terms.upper() == "S":
        socio = Socio(Nombre,Apellido,Dni,FechaNacimiento,Domicilio,Localidad,Telefono,Email,Enfermedad,Medicamentos,NombreMedicamento,NombreTipoSangre,"none") #Crear el objeto socio dependiendo del tipo de sangre ingresado

        Socios.append(socio)            #guardar el objeto dentro de una lista para mantenerlo
    

def ShowSocios():
    j = 1
    for i in Socios:
        print(f"\033[95m\nSocio N° {j}:\033[0;0m")
        print(i)
        j = j + 1



def MenuGestionarPeticion():
    while True:
        Cond = True
        Cond1 = False
        while Cond:
            if Cond1:
                os.system("CLS")
                print("\033[91m\nPor favor Seleccione una opción correcta\033[0;0m") #Cambiar color
            print("\033[2;30;47m\t\tCirculo de sangre\n\033[0;0m")
            print("***********************")
            print("Registrar Nueva Peticion ----------------------------------A")
            print("Mostrar Lista de Prioridad --------------------------------B")
            print("Motrar Peticiones -----------------------------------------C")
            print("Salir -----------------------------------------------------S")
            print("***********************")
            Choice = input("Seleccione un opción: ")

            for Option in ["A","B","C","S"]:
                if Choice.upper() == Option:
                    Cond = False

            Cond1 = True
        if Choice.upper() == "A":
            os.system("CLS")
            RegistrarPeticion()
        elif Choice.upper() == "B":
            os.system("CLS")
            MostrarListaDePrioridad()
        elif Choice.upper() == "C":
            os.system("CLS")
            MostrarPeticiones()
        elif Choice.upper() == "S":
            os.system("CLS")
            break

def RegistrarPeticion():
    while True:
        try:
            Donantes = int(input("Ingrese cantidad de donantes necesarios: "))
        except ValueError:
            print("La cantidad de donantes debe ser un numero")
            continue
        if (Donantes <= 0):
            print("\033[91mLa cantidad de donantes no puesde ser negativo o 0\033[0;0m")
            continue
        else:
            break

    while True:
        TipoDeSangre = input("Ingrese el tipo de sangre: ")
        band = Validador.VerificarSangre(TipoDeSangre)
        if band:
            break
    while True:
        FactorSangre = input("Ingrese el factor de sangre(+/-): ")
        if(FactorSangre == "-"):
            break
        else:
             print("\033[91mSolo se acepta factor de sangre NEGATIVO\033[0;0m")
 
    while True:
        FechaLimite = input("Ingrese una fecha limite (YYYY/MM/DD): ")
        band = Validador.VerificarFechaPeticion(FechaLimite)
        if band:
            break
    
    Peticion1 = Peticion(today,Donantes,FechaLimite,TipoDeSangre)
    Peticiones.append(Peticion1)
    RegistrarDonaciones()

def RegistrarDonaciones():
    cont = 0
    Peticion = Peticiones[len(Peticiones) - 1]
    ListaPrioridad = GenerarListaDePrioridad()
    for i in ListaPrioridad:
        os.system("CLS")
        if (Peticion.Donantes > cont):
            if(i[0].TipoSangre == Peticion.TipoDeSangre):
                print(f"\033[95m Pedidio N°: {len(Peticiones)} \n Fecha Emision: {Peticion.Fecha} \n Fecha Limite: {Peticion.FechaLimite}\033[0;0m")
                print(f"\nSocio: {i[0].Apellido} {i[0].Nombre}")
                while True:
                    FechaTurno = input("Ingrese una fecha de turno (-1 si no esta disponible) (YYYY/MM/DD): ")
                    band = Validador.VerificarFechaTurno(FechaTurno,Peticion.FechaLimite)
                    if band:
                        break
                if(FechaTurno != "-1"):
                    Donacion1 = Donacion(FechaTurno,False,Peticion,i[0])
                    Donaciones.append(Donacion1)
                    cont = cont + 1
        else:
            break
    if(cont == 0):
        print("\033[91mNo Existen mas donantes en la lista de prioridad para dicha peticion\033[0;0m")
    else:
        print(f"\033[95m\nSe generaron {cont} Donaciones para dicha peticion\033[0;0m")

        
        
def MostrarPeticiones():
    j = 1
    for i in Peticiones:
        print(f"\033[95m\nPeticion N° {j}:\033[0;0m")
        print(i)
        j = j + 1

def GenerarListaDePrioridad():
    ListaPrioridad = []
    for Socio in Socios:
        cont = 0
        if(Socio.Categoria.Nombre == "Activo"):
            for donacion in Donaciones:
                if(donacion.Socio.Dni == Socio.Dni and donacion.FechaDonacion.year == today.year and donacion.Estado == True):
                    cont = cont + 1
            if(cont < 2):
                ListaPrioridad.append((Socio,cont))
    ListaPrioridad.sort(key = lambda x: x[1])
    return ListaPrioridad

def MostrarListaDePrioridad():
    ListaPrioridad = GenerarListaDePrioridad()
    j = 1
    print("\033[95m \t\t Dni \t\t\t Socio \t\t\t Grupo Sanguineo\033[0;0m")
    for i in ListaPrioridad:
        print(f"{j} \t\t {i[0].Dni} \t\t {i[0].Apellido} {i[0].Nombre} \t\t {i[0].TipoSangre.Tipo}")
        j = j + 1


main()
print("ok")

