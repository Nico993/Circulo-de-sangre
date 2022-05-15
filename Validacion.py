import string
import re
from datetime import date
from Socio import Socios
ABC = list(string.ascii_uppercase)
ABC.append("Ñ")
ABC.append(" ")
today = date.today()

class Validacion:

    def VerificarString(self, Input):
        band = False
        for i in Input:
            if i.upper() not in ABC:    #Verificar si cada letra del nombre corresponde a alguna del abecedario
                band = True
                break
        return band

    def VerificarFechaNacimiento(self,FechaNacimiento):
        if (re.match("^[0-9]{4}/[0-9]{2}/[0-9]{2}$",FechaNacimiento)):    #Verificar que sea el formato adecuado
            SplitDate = FechaNacimiento.split("/")
            if (today.year < int(SplitDate[0])):                  #verificar que sea una fecha pasada
                print("\033[91mIngrese un formato valido de fecha\033[0;0m")
            elif (today.month < int(SplitDate[1]) and today.year <= int(SplitDate[0])):
                print("\033[91mIngrese un formato valido de fecha\033[0;0m")
            elif (today.day < int(SplitDate[2]) and today.month <= int(SplitDate[1]) and today.year <= int(SplitDate[0])):
                print("\033[91mIngrese un formato valido de fecha\033[0;0m")
            elif (int(SplitDate[0]) <= 1900 or int(SplitDate[1]) < 1 or int(SplitDate[1]) > 12 or int(SplitDate[2]) < 1 or int(SplitDate[2]) > 31):
                print("\033[91mIngrese una fecha valida\033[0;0m")
            else:
                return True
        else:
            print("\033[91mIngrese un formato valido de fecha\033[0;0m")
        return False
    
    def VerificarEmail(self,Email):
        if (re.match("^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$",Email)):
            return True
        else:
            print("\033[91mIngrese un email valido\033[0;0m")
            return False
    
    def VerificarSiNo(self,Input):
        if Input.upper() != "S" and Input.upper() != "N":
            print("\033[91mIngrese una respuesta valida\033[0;0m")
            return False
        else:
            return True
    
    def VerificarSangre(self,NombreTipoSangre):
        if NombreTipoSangre.upper() not in["A","B","O","AB"]:
            print("\033[91mIngrese un tipo de sangre valido\033[0;0m")
            return False
        else:
            return True

    def VerificarFechaPeticion(self,FechaPeticion):
        if (re.match("^[0-9]{4}/[0-9]{2}/[0-9]{2}$",FechaPeticion)):    #Verificar que sea el formato adecuado
            SplitDate = FechaPeticion.split("/")
            if(today.year == int(SplitDate[0]) and today.month == int(SplitDate[1]) and today.day < int(SplitDate[2])):
                return True
            elif(today.year == int(SplitDate[0]) and today.month == (int(SplitDate[1]) - 1)):
                return True
            else:
                print("\033[91mLa fecha limite es hasta el mes que viene como maximo\033[0;0m")
        else:
            print("\033[91mIngrese un formato valido de fecha\033[0;0m")
            return False

    def VerificarFechaTurno(self,FechaTurno,FechaLimite):
        if (FechaTurno == "-1"):
            return True
        elif (re.match("^[0-9]{4}/[0-9]{2}/[0-9]{2}$",FechaTurno)):
            SplitDate = FechaTurno.split("/") 
            FechaTurno= date(int(SplitDate[0]),int(SplitDate[1]),int(SplitDate[2]))
            if(FechaTurno <= FechaLimite and FechaTurno >= today):
                return True
            else:
                print("\033[91mIngrese una fecha anterior a la fecha limite y posterior a la fecha de hoy\033[0;0m")
                return False
        else:
            print("\033[91mIngrese un formato valido de fecha\033[0;0m")
            return False
