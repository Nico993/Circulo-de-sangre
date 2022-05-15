from Sangre import *
from datetime import *
Peticiones = []

class Peticion:
    def __init__(self,Fecha,Donantes,FechaLimite,TipoDeSangre):
        self.Fecha = Fecha
        self.Donantes = Donantes
        self.FechaLimite = FechaLimite
        self.TipoDeSangre = TipoDeSangre
        self.ConvertirFecha()
        self.DefinirTipoDeSangre()

    def __str__(self):
        return f"\nFecha: {self.Fecha}\nDonantes: {self.Donantes}\nFechaLimite: {self.FechaLimite}\nTipoDeSangre: {self.TipoDeSangre.Tipo}"
    
    def ConvertirFecha(self):
        SplitDate = self.FechaLimite.split("/") 
        self.FechaLimite = date(int(SplitDate[0]),int(SplitDate[1]),int(SplitDate[2]))

    def DefinirTipoDeSangre(self):
        if self.TipoDeSangre.upper() == "A":
            self.TipoDeSangre = TipoA
        elif self.TipoDeSangre.upper() == "B":
            self.TipoDeSangre = TipoB
        elif self.TipoDeSangre.upper() == "AB":
            self.TipoDeSangre = TipoAB
        elif self.TipoDeSangre.upper() == "O":
            self.TipoDeSangre = TipoO



