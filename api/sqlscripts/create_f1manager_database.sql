USE [Master]
GO

CREATE DATABASE F1Manager
GO

USE [F1Manager]
GO
/****** Object:  Table [dbo].[Circuits]    Script Date: 1-9-2020 21:16:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Circuits](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Length] [decimal](10, 3) NOT NULL,
	[LapRecord] [nvarchar](max) NULL,
	[CountryId] [int] NOT NULL,
 CONSTRAINT [PK_Circuits] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Countries]    Script Date: 1-9-2020 21:16:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Countries](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](25) NULL,
 CONSTRAINT [PK_Countries] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Driver]    Script Date: 1-9-2020 21:16:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Driver](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[BirthDate] [datetime2](7) NULL,
	[CountryId] [int] NOT NULL,
	[GrandPrixs] [int] NOT NULL,
	[Podiums] [int] NOT NULL,
	[StartNumber] [int] NOT NULL,
	[TeamId] [int] NULL,
 CONSTRAINT [PK_Driver] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GrandPrix]    Script Date: 1-9-2020 21:16:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GrandPrix](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[CircuitId] [int] NULL,
	[Year] [int] NOT NULL,
	[Date] [date] NOT NULL,
 CONSTRAINT [PK_GrandPrix] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RaceCalendar]    Script Date: 1-9-2020 21:16:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RaceCalendar](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime2](7) NOT NULL,
	[GrandPrixId] [int] NOT NULL,
	[CircuitId] [int] NOT NULL,
 CONSTRAINT [PK_RaceCalendar] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RaceResults]    Script Date: 1-9-2020 21:16:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RaceResults](
	[GrandPrixId] [int] NOT NULL,
	[DriverId] [int] NOT NULL,
	[Position] [int] NOT NULL,
	[Time] [nvarchar](25) NULL,
	[Laps] [int] NULL,
 CONSTRAINT [PK_RaceResults] PRIMARY KEY CLUSTERED 
(
	[GrandPrixId] ASC,
	[DriverId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ScoreTable]    Script Date: 1-9-2020 21:16:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ScoreTable](
	[Position] [int] NOT NULL,
	[Score] [int] NOT NULL,
 CONSTRAINT [PK_ScoreTable] PRIMARY KEY CLUSTERED 
(
	[Position] ASC,
	[Score] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Teams]    Script Date: 1-9-2020 21:16:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Teams](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Fullname] [nvarchar](max) NULL,
	[Manufacturer] [nvarchar](max) NULL,
	[CountryId] [int] NOT NULL,
	[Logo] [nvarchar](max) NULL,
 CONSTRAINT [PK_Teams] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[GrandPrix] ADD  CONSTRAINT [DF_GrandPrix_Year]  DEFAULT ((0)) FOR [Year]
GO
ALTER TABLE [dbo].[GrandPrix] ADD  CONSTRAINT [DF_GrandPrix_Date]  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Circuits]  WITH CHECK ADD  CONSTRAINT [FK_Circuits_Countries_CountryId] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Circuits] CHECK CONSTRAINT [FK_Circuits_Countries_CountryId]
GO
ALTER TABLE [dbo].[Driver]  WITH CHECK ADD  CONSTRAINT [FK_Driver_Countries_CountryId] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Driver] CHECK CONSTRAINT [FK_Driver_Countries_CountryId]
GO
ALTER TABLE [dbo].[Driver]  WITH CHECK ADD  CONSTRAINT [FK_Driver_Teams_TeamId] FOREIGN KEY([TeamId])
REFERENCES [dbo].[Teams] ([Id])
GO
ALTER TABLE [dbo].[Driver] CHECK CONSTRAINT [FK_Driver_Teams_TeamId]
GO
ALTER TABLE [dbo].[GrandPrix]  WITH CHECK ADD  CONSTRAINT [FK_GrandPrix_Circuits_CircuitId] FOREIGN KEY([CircuitId])
REFERENCES [dbo].[Circuits] ([Id])
GO
ALTER TABLE [dbo].[GrandPrix] CHECK CONSTRAINT [FK_GrandPrix_Circuits_CircuitId]
GO
ALTER TABLE [dbo].[RaceCalendar]  WITH CHECK ADD  CONSTRAINT [FK_RaceCalendar_Circuits] FOREIGN KEY([CircuitId])
REFERENCES [dbo].[Circuits] ([Id])
GO
ALTER TABLE [dbo].[RaceCalendar] CHECK CONSTRAINT [FK_RaceCalendar_Circuits]
GO
ALTER TABLE [dbo].[RaceCalendar]  WITH CHECK ADD  CONSTRAINT [FK_RaceCalendar_GrandPrix] FOREIGN KEY([GrandPrixId])
REFERENCES [dbo].[GrandPrix] ([Id])
GO
ALTER TABLE [dbo].[RaceCalendar] CHECK CONSTRAINT [FK_RaceCalendar_GrandPrix]
GO
ALTER TABLE [dbo].[RaceResults]  WITH CHECK ADD  CONSTRAINT [FK_RaceResults_Driver] FOREIGN KEY([DriverId])
REFERENCES [dbo].[Driver] ([Id])
GO
ALTER TABLE [dbo].[RaceResults] CHECK CONSTRAINT [FK_RaceResults_Driver]
GO
ALTER TABLE [dbo].[RaceResults]  WITH CHECK ADD  CONSTRAINT [FK_RaceResults_RaceResults] FOREIGN KEY([GrandPrixId])
REFERENCES [dbo].[GrandPrix] ([Id])
GO
ALTER TABLE [dbo].[RaceResults] CHECK CONSTRAINT [FK_RaceResults_RaceResults]
GO
ALTER TABLE [dbo].[Teams]  WITH CHECK ADD  CONSTRAINT [FK_Teams_Countries_CountryId] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Countries] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Teams] CHECK CONSTRAINT [FK_Teams_Countries_CountryId]
GO
