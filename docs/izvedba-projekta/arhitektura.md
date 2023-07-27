# 4.2. Arhitektira i implementacija projekta

## 4.2.1. Baza podataka
Za bazu podataka koristili smo SQL Server, najviše zbog jednostavnosti implementiranja s Entity Framework Core-om te zato što je najjeftinija opcija na Azure-u. Budući da nam je cijela aplikacija Microsoft oriented MsSQL se činio najboljom opcijom.

## 4.2.2. ViewModel
MVVM arhitektura je nešto kompliciranija za implementaciju, većinom zato što nije standardna i često korištena kao sto je MVC. Odabrali smo koristiti ViewModele za aplikaciju zbog toga što bi takav backend bio znatno jednostavniji za povezivanje s frontendom aplikacija drugih platformi, ne samo web-a. Većinom smo razmišljali u smjeru kreiranja mobilne aplikacije nekad u budućnosti, a .NET Maui se čini kao odličan kandidat za takvo nešto. Upravo za to će nam MVVM arhitektura uvelike olakšati buduće pothvate.

Dijagram view modela
