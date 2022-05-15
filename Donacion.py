from datetime import *
Donaciones = []

class Donacion:
    def __init__(self,FechaDonacion,Estado,Peticion,Socio):
        self.FechaDonacion = FechaDonacion
        self.Estado = Estado
        self.Peticion = Peticion
        self.Socio = Socio
        self.ConvertirFecha()

    def ConvertirFecha(self):
        SplitDate = self.FechaDonacion.split("/") 
        self.FechaDonacion = date(int(SplitDate[0]),int(SplitDate[1]),int(SplitDate[2]))

    
        