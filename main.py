from classes import *

#Variables globales
Options = ["A","B", "S"]

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
        print("Opcion a")
    elif num == 1:
        print("Opcion b")
    #sigue....

    









main()


print("ok")

