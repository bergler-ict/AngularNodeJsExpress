USE [F1Manager]
GO
SET IDENTITY_INSERT [dbo].[Countries] ON 
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (1, N'Duitsland')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (2, N'Groot Brittanië')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (3, N'Finland')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (4, N'Italië')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (5, N'Monaco')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (6, N'Oostenrijk')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (7, N'Nederland')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (8, N'Frankrijk')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (9, N'Australië')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (10, N'Verenigde Staten')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (11, N'Denemarken')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (12, N'Spanje')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (13, N'Mexico')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (14, N'Canada')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (15, N'Zwitserland')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (16, N'Rusland')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (17, N'Thailand')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (18, N'Polen')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (19, N'Bahrein')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (20, N'China')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (21, N'Azerbeidzjan')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (22, N'Hongarije')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (23, N'België')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (24, N'China (Singapore)')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (25, N'Japan')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (26, N'Brazilië')
GO
INSERT [dbo].[Countries] ([Id], [Name]) VALUES (27, N'Abu Dhabi')
GO
SET IDENTITY_INSERT [dbo].[Countries] OFF
GO
SET IDENTITY_INSERT [dbo].[Circuits] ON 
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (1, N'Circuit de Monaco', CAST(3.337 AS Decimal(10, 3)), N'1:14.260 Max Verstappen (2018)', 5)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (2, N'Circuit of The Americas', CAST(5.513 AS Decimal(10, 3)), N'1:37.392 Lewis Hamilton (2018)', 10)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (3, N'Autódromo Hermanos Rodríguez', CAST(4.304 AS Decimal(10, 3)), N'1:18.741 Valtteri Bottas (2018)', 13)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (4, N'Suzuka International Racing Course', CAST(5.807 AS Decimal(10, 3)), N'1:31.540 Kimi Räikkönen (2005)', 25)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (5, N'Sochi Autodrom', CAST(5.848 AS Decimal(10, 3)), N'1:35.861', 16)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (6, N'Marina Bay Street Circuit', CAST(50.630 AS Decimal(10, 3)), N'1:41.905 Kevin Magnussen (2018)', 24)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (7, N'Autodromo Nazionale Monza', CAST(5.793 AS Decimal(10, 3)), N'1:21.046 Rubens Barichello (2004)', 4)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (8, N'Circuit de Spa-Francorchamps', CAST(7.004 AS Decimal(10, 3)), N'1:46.286 Valtteri Bottas (2018)', 23)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (9, N'Hungaroring', CAST(4.381 AS Decimal(10, 3)), N'1:19.071 Michael Schumacher (2004)', 22)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (10, N'Hockenheimring', CAST(4.574 AS Decimal(10, 3)), N'1:13.780 Kimi Räikkönen (2004)', 1)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (11, N'Silverstone Circuit', CAST(5.891 AS Decimal(10, 3)), N'1:30.621 Lewis Hamilton (2017)', 2)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (12, N'Red Bull Ring', CAST(4.318 AS Decimal(10, 3)), N'1:06.957 Kimi Räikkönen (2018)', 6)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (13, N'Circuit Paul Ricard', CAST(5.842 AS Decimal(10, 3)), N'1:34.225 Valtteri Bottas (2018)', 8)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (14, N'Circuit Gilles-Villeneuve', CAST(4.361 AS Decimal(10, 3)), N'1:13.622 Rubens Barichello (2004)', 14)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (15, N'Autódromo José Carlos Pace', CAST(4.309 AS Decimal(10, 3)), N'1:10.540 Valtteri Bottas (2018)', 26)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (16, N'Yas Marina Circuit', CAST(5.554 AS Decimal(10, 3)), N'1:40.279 Sebastian Vettel (2009)', 27)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (17, N'Baku City Circuit', CAST(6.003 AS Decimal(10, 3)), N'1:43.441 Sebastian Vettel (2017)', 21)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (18, N'Shanghai International Circuit', CAST(5.451 AS Decimal(10, 3)), N'1:32.238 Michael Schumacher (2004)', 20)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (19, N'Bahrain International Circuit', CAST(5.412 AS Decimal(10, 3)), N'1:31.447 Pedro de la Rosa (2005)', 19)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (20, N'Melbourne Grand Prix Circuit', CAST(5.303 AS Decimal(10, 3)), N'1:24.125 Michael Schumacher (2004)', 9)
GO
INSERT [dbo].[Circuits] ([Id], [Name], [Length], [LapRecord], [CountryId]) VALUES (21, N'Circuit de Barcelona-Catalunya', CAST(4.655 AS Decimal(10, 3)), N'1:18:441 Daniel Ricciardo (2018)', 12)
GO
SET IDENTITY_INSERT [dbo].[Circuits] OFF
GO
SET IDENTITY_INSERT [dbo].[Teams] ON 
GO
INSERT [dbo].[Teams] ([Id], [Name], [Fullname], [Manufacturer], [CountryId], [Logo]) VALUES (1, N'Williams', N'Williams Racing', N'Mercedes', 2, N'williams.jpg')
GO
INSERT [dbo].[Teams] ([Id], [Name], [Fullname], [Manufacturer], [CountryId], [Logo]) VALUES (2, N'Toro Rosso', N'Red Bull Toro Rosso Honda', N'Honda', 4, N'torro-rosso.jpg')
GO
INSERT [dbo].[Teams] ([Id], [Name], [Fullname], [Manufacturer], [CountryId], [Logo]) VALUES (3, N'Sauber', N'Alfa Romeo Sauber F1 Team', N'Ferrari', 15, N'sauber.jpg')
GO
INSERT [dbo].[Teams] ([Id], [Name], [Fullname], [Manufacturer], [CountryId], [Logo]) VALUES (4, N'Racing Point', N'Racing Point F1 Team', N'Mercedes', 2, N'racing-point.jpg')
GO
INSERT [dbo].[Teams] ([Id], [Name], [Fullname], [Manufacturer], [CountryId], [Logo]) VALUES (5, N'McLaren', N'McLaren F1 Team', N'Renault', 2, N'mclaren.jpg')
GO
INSERT [dbo].[Teams] ([Id], [Name], [Fullname], [Manufacturer], [CountryId], [Logo]) VALUES (6, N'Haas', N'Rich Energy Haas F1 Team', N'Ferrari', 10, N'haas.jpg')
GO
INSERT [dbo].[Teams] ([Id], [Name], [Fullname], [Manufacturer], [CountryId], [Logo]) VALUES (7, N'Renault', N'Renault F1 Team', N'Renault', 8, N'renault.jpg')
GO
INSERT [dbo].[Teams] ([Id], [Name], [Fullname], [Manufacturer], [CountryId], [Logo]) VALUES (8, N'Red Bul Racing', N'Aston Martin Red Bull Racing', N'Honda', 6, N'red-bull.jpg')
GO
INSERT [dbo].[Teams] ([Id], [Name], [Fullname], [Manufacturer], [CountryId], [Logo]) VALUES (9, N'Ferrari', N'Scuderia Ferrari Mission Winnow', N'Ferrari', 4, N'ferrari.jpg')
GO
INSERT [dbo].[Teams] ([Id], [Name], [Fullname], [Manufacturer], [CountryId], [Logo]) VALUES (10, N'Mercedes', N'Mercedes-AMG Petronas Motorsport', N'Mercedes', 1, N'mercedes.jpg')
GO
SET IDENTITY_INSERT [dbo].[Teams] OFF
GO
SET IDENTITY_INSERT [dbo].[Driver] ON 
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (3, N'Lewis Hamilton', CAST(N'1985-01-07T00:00:00.0000000' AS DateTime2), 2, 229, 134, 44, 10)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (4, N'George Russell', CAST(N'1998-02-15T00:00:00.0000000' AS DateTime2), 2, 0, 0, 63, 1)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (5, N'Robert Kubica', CAST(N'1984-12-07T00:00:00.0000000' AS DateTime2), 18, 76, 12, 88, 1)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (6, N'Alexander Albon', CAST(N'1996-03-23T00:00:00.0000000' AS DateTime2), 17, 0, 0, 23, 2)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (7, N'Daniil Kvyat', CAST(N'1994-04-26T00:00:00.0000000' AS DateTime2), 16, 74, 2, 26, 2)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (8, N'Antonio Giovinazzi', CAST(N'1993-12-14T00:00:00.0000000' AS DateTime2), 4, 2, 0, 99, 3)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (9, N'Lance Stroll', CAST(N'1998-10-29T00:00:00.0000000' AS DateTime2), 14, 41, 1, 18, 4)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (10, N'Sergio Perez', CAST(N'1990-01-26T00:00:00.0000000' AS DateTime2), 13, 157, 8, 11, 4)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (11, N'Lando Norris', CAST(N'1999-11-13T00:00:00.0000000' AS DateTime2), 2, 0, 0, 4, 5)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (12, N'Carlos Sainz', CAST(N'1994-09-01T00:00:00.0000000' AS DateTime2), 12, 81, 0, 55, 5)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (13, N'Kimi Räikkönen', CAST(N'1979-10-17T00:00:00.0000000' AS DateTime2), 3, 294, 103, 7, 3)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (14, N'Romain Grosjean', CAST(N'1986-04-17T00:00:00.0000000' AS DateTime2), 8, 145, 10, 8, 6)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (15, N'Kevin Magnussen', CAST(N'1992-10-05T00:00:00.0000000' AS DateTime2), 11, 82, 1, 20, 6)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (16, N'Sebastian Vettel', CAST(N'1987-07-03T00:00:00.0000000' AS DateTime2), 1, 220, 111, 5, 9)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (17, N'Charles Leclerc', CAST(N'1997-10-16T00:00:00.0000000' AS DateTime2), 5, 21, 0, 16, 9)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (18, N'Max Verstappen', CAST(N'1997-09-30T00:00:00.0000000' AS DateTime2), 7, 81, 22, 33, 8)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (19, N'Valtteri Bottas', CAST(N'1989-08-28T00:00:00.0000000' AS DateTime2), 3, 119, 30, 77, 10)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (20, N'Nico Hulkenberg', CAST(N'1987-08-19T00:00:00.0000000' AS DateTime2), 1, 158, 0, 27, 7)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (21, N'Daniel Ricciardo', CAST(N'1989-07-01T00:00:00.0000000' AS DateTime2), 9, 150, 29, 3, 7)
GO
INSERT [dbo].[Driver] ([Id], [Name], [BirthDate], [CountryId], [GrandPrixs], [Podiums], [StartNumber], [TeamId]) VALUES (22, N'Pierre Gasly', CAST(N'1996-02-07T00:00:00.0000000' AS DateTime2), 8, 26, 0, 10, 8)
GO
SET IDENTITY_INSERT [dbo].[Driver] OFF
GO
SET IDENTITY_INSERT [dbo].[GrandPrix] ON 
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (1, N'FORMULA 1 MAGYAR NAGYDÍJ 2019', 9, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (2, N'FORMULA 1 UNITED STATES GRAND PRIX 2019', 2, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (3, N'FORMULA 1 GRAN PREMIO DE MÉXICO 2019', 3, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (4, N'FORMULA 1 JAPANESE GRAND PRIX 2019', 4, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (5, N'FORMULA 1 VTB RUSSIAN GRAND PRIX 2019', 5, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (6, N'FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2019', 6, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (7, N'FORMULA 1 GRAN PREMIO HEINEKEN D''ITALIA 2019', 7, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (8, N'FORMULA 1 BELGIAN GRAND PRIX 2019', 8, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (9, N'FORMULA 1 MERCEDES-BENZ GROSSER PREIS VON DEUTSCHLAND 2019', 10, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (10, N'FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2019', 20, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (11, N'FORMULA 1 MYWORLD GROSSER PREIS VON ÖSTERREICH 2019', 12, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (12, N'FORMULA 1 GRAND PRIX DE FRANCE 2019', 13, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (13, N'FORMULA 1 GRAND PRIX DU CANADA 2019', 14, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (14, N'FORMULA 1 GRAND PRIX DE MONACO 2019', 1, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (15, N'FORMULA 1 GRAN PREMIO DE ESPAÑA 2019', 21, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (16, N'FORMULA 1 AZERBAIJAN GRAND PRIX 2019', 17, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (17, N'FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2019', 18, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (18, N'FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2019', 19, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (19, N'FORMULA 1 GRANDE PRÊMIO DO BRASIL 2019', 15, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (20, N'FORMULA 1 ROLEX BRITISH GRAND PRIX 2019', 11, NULL)
GO
INSERT [dbo].[GrandPrix] ([Id], [Name], [CircuitId], [RaceCalendarId]) VALUES (21, N'FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2019', 16, NULL)
GO
SET IDENTITY_INSERT [dbo].[GrandPrix] OFF
GO
