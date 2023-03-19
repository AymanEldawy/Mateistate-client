USE [master]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](250) NULL,
	[LtnName] [varchar](250) NULL,
	[Code] [varchar](250) NULL,
	[CDate] [date] NULL,
	[NSons] [int] NULL,
	[Note] [varchar](250) NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[Type] [int] NULL,
	[ParentGUID] [uniqueidentifier] NULL,
	[FinalGUID] [uniqueidentifier] NULL,
	[MaxDebit] [float] NULL,
	[MinDebit] [float] NULL,
	[MaxCredit] [float] NULL,
	[MinCredit] [float] NULL,
	[SumDebit] [float] NULL,
	[SumCredit] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountAccumulate](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Alerts](
	[Guid] [uniqueidentifier] NOT NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[isRead] [bit] NULL,
	[Expdate] [date] NULL,
	[Details] [varchar](250) NULL,
	[Table_name] [varchar](50) NULL,
	[Entry_number] [int] NULL,
	[Date] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Number] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
CREATE TABLE [dbo].[AccountConformity](
	[Date] [date] NULL,
	[Guid] [uniqueidentifier] NOT NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[Debit] [float] NULL,
	[Credit] [float] NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountDistributive](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Percent] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountFavoriteConfig](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[UserGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccumulateFlat](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[FlatGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccumulateLand](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[LandGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccumulateParking](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[ParkingGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccumulateShop](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[ShopGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AlarmCheckTypeSource](
	[UserGuid] [uniqueidentifier] NULL,
	[CheckTypeGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Apartment](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[CardKind] [int] NULL,
	[Judicial] [bit] NULL,
	[Ban] [bit] NULL,
	[NO] [varchar](256) NULL,
	[UnifiedNum] [varchar](256) NULL,
	[ManservantRoom] [int] NULL,
	[DriverRoom] [int] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[FloorNo] [varchar](256) NULL,
	[Area] [float] NULL,
	[unity] [varchar](256) NULL,
	[ApartmentType] [varchar](256) NULL,
	[FlatKind] [varchar](256) NULL,
	[Class] [varchar](256) NULL,
	[Overlooking] [varchar](256) NULL,
	[CostPrice] [float] NULL,
	[CostCurrencyGUID] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[FlatOwner] [int] NULL,
	[Details] [varchar](256) NULL,
	[OfferState] [int] NULL,
	[OfferType] [int] NULL,
	[CustomerName] [varchar](256) NULL,
	[CustomerPhone] [varchar](256) NULL,
	[Restrained] [bit] NULL,
	[PayValue] [float] NULL,
	[BondType] [varchar](256) NULL,
	[BondNo] [varchar](256) NULL,
	[BondDate] [date] NULL,
	[BathroomCount] [int] NULL,
	[BalconyCount] [int] NULL,
	[WaterCounter] [varchar](256) NULL,
	[ElectricityCounter] [varchar](256) NULL,
	[RestrainedUserGuid] [uniqueidentifier] NULL,
	[PurchaseDate] [date] NULL,
	[BeginLandValue] [float] NULL,
	[CurrencyBeginLandGuid] [uniqueidentifier] NULL,
	[CurrencyValBeginLand] [float] NULL,
	[PurchaseAccountGuid] [uniqueidentifier] NULL,
	[CreatePurchaseEntry] [bit] NULL,
	[CommissionPercent] [float] NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[FlatCost] [float] NULL,
	[LastContractGUID] [uniqueidentifier] NULL,
	[CustOwnerGuid] [uniqueidentifier] NULL,
	[LtnFlatKind] [varchar](256) NULL,
	[LtnApartmentType] [varchar](256) NULL,
	[LtnClass] [varchar](256) NULL,
	[LtnOverlooking] [varchar](256) NULL,
	[Rent] [float] NULL,
	[RentCurrencyGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_ApartmentBuildingGuid_NO_UNIQUE] UNIQUE NONCLUSTERED 
(
	[BuildingGuid] ASC,
	[NO] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApartmentOffer](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[CardKind] [int] NULL,
	[NO] [varchar](256) NULL,
	[Building] [varchar](256) NULL,
	[Customer] [varchar](256) NULL,
	[FloorNo] [varchar](256) NULL,
	[Area] [float] NULL,
	[Address] [varchar](800) NULL,
	[unity] [varchar](256) NULL,
	[ApartmentType] [varchar](256) NULL,
	[FlatKind] [varchar](256) NULL,
	[Class] [varchar](256) NULL,
	[Overlooking] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[FlatOwner] [int] NULL,
	[Details] [varchar](256) NULL,
	[BathroomCount] [int] NULL,
	[BalconyCount] [int] NULL,
	[WaterCounter] [varchar](256) NULL,
	[ElectricityCounter] [varchar](256) NULL,
	[OfferKind] [int] NULL,
	[OfferValue] [float] NULL,
	[Delegated] [varchar](256) NULL,
	[CustPhone] [varchar](256) NULL,
	[CustMobile] [varchar](256) NULL,
	[MaxOfferValue] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_ApartmentOfferBuildingGuid_NO_UNIQUE] UNIQUE NONCLUSTERED 
(
	[Building] ASC,
	[NO] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppReport](
	[date] [date] NULL,
	[HostName] [varchar](256) NULL,
	[Comp] [varchar](256) NULL,
	[hardlimit] [int] NULL,
	[SN] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[arv_files](
	[ParentGuid] [uniqueidentifier] NULL,
	[Blobfile] [varbinary](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[arv_Filter](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Kind] [int] NULL,
	[Name] [varchar](250) NULL,
	[LtnName] [varchar](250) NULL,
	[TableGuid] [uniqueidentifier] NULL,
	[ParentName] [varchar](255) NULL,
	[Note] [varchar](256) NULL,
	[sqlCmd] [varchar](8000) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[arv_FilterDetail](
	[ParentGuid] [uniqueidentifier] NULL,
	[id] [int] NULL,
	[Parentid] [int] NULL,
	[IsGroup] [bit] NULL,
	[Link] [int] NULL,
	[FldCaption] [varchar](255) NULL,
	[FldName] [varchar](255) NULL,
	[Condition] [varchar](25) NULL,
	[ParamKind] [int] NULL,
	[Value1] [varchar](255) NULL,
	[Value2] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[arv_FilterParams](
	[ParentGuid] [uniqueidentifier] NULL,
	[id] [int] NULL,
	[ParamName] [varchar](255) NULL,
	[ParamType] [varchar](255) NULL,
	[ParamDef] [varchar](255) NULL,
	[ParamFld] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Assets](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[AssetsGroupGuid] [uniqueidentifier] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Barcode] [varchar](256) NULL,
	[IsActive] [bit] NULL,
	[Note] [varchar](256) NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[AssetsAreaGuid] [uniqueidentifier] NULL,
	[CurrentAssetsAreaGuid] [uniqueidentifier] NULL,
	[State] [varchar](256) NULL,
	[Importer] [varchar](256) NULL,
	[EnterAccountGuid] [uniqueidentifier] NULL,
	[EnterCostGuid] [uniqueidentifier] NULL,
	[EnterCreditCostGuid] [uniqueidentifier] NULL,
	[EnterValue] [float] NULL,
	[EnterDate] [date] NULL,
	[Origin] [varchar](256) NULL,
	[Company] [varchar](256) NULL,
	[EnterNote] [varchar](256) NULL,
	[CreateEntry] [bit] NULL,
	[AsstesAccountGuid] [uniqueidentifier] NULL,
	[ExpenseAccountGuid] [uniqueidentifier] NULL,
	[DepreciationAccountGuid] [uniqueidentifier] NULL,
	[DepreciationTotalAccountGuid] [uniqueidentifier] NULL,
	[ProfitAccountGuid] [uniqueidentifier] NULL,
	[lossesAccountGuid] [uniqueidentifier] NULL,
	[EvaluationAccountGuid] [uniqueidentifier] NULL,
	[Shipping] [varchar](256) NULL,
	[ShippingNo] [varchar](256) NULL,
	[ShippingDate] [date] NULL,
	[ArriveDate] [date] NULL,
	[ArrivePlace] [varchar](256) NULL,
	[ImportPermit] [varchar](256) NULL,
	[CustomsNote] [varchar](256) NULL,
	[CustomsDate] [date] NULL,
	[CustomsExpense] [varchar](256) NULL,
	[ShippingNote] [varchar](256) NULL,
	[MaintenanceContract] [varchar](256) NULL,
	[MaintenanceBeginDate] [date] NULL,
	[MaintenanceEndDate] [date] NULL,
	[Guaranty] [varchar](256) NULL,
	[GuarantyBeginDate] [date] NULL,
	[GuarantyEndDate] [date] NULL,
	[DepreciationMode] [int] NULL,
	[IsDepreciationMonthly] [int] NULL,
	[DepreciationBeginDate] [date] NULL,
	[Age] [int] NULL,
	[DepreciationAvg] [float] NULL,
	[ScrapValue] [float] NULL,
	[OldYearExtra] [float] NULL,
	[OldYearDecrease] [float] NULL,
	[OldYearDepreciation] [float] NULL,
	[OldYearMaintenance] [float] NULL,
	[IsSale] [bit] NULL,
	[SaleDate] [date] NULL,
	[SaleCustomer] [varchar](256) NULL,
	[SalesAccountGuid] [uniqueidentifier] NULL,
	[SaleValue] [float] NULL,
	[CurrencySaleGUID] [uniqueidentifier] NULL,
	[CurrencySaleVal] [float] NULL,
	[SaleNote] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AssetsArea](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[ParentGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AssetsChangeArea](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[AssetsGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[CurrentAreaGuid] [uniqueidentifier] NULL,
	[AreaGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AssetsDepreciation](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Date] [date] NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[CreateEntry] [bit] NULL,
	[CreditCostGUID] [uniqueidentifier] NULL,
	[DebitCostGUID] [uniqueidentifier] NULL,
	[AssetsGroupGuid] [uniqueidentifier] NULL,
	[AssetsGuid] [uniqueidentifier] NULL,
	[AssetsAreaGuid] [uniqueidentifier] NULL,
	[IsRounded] [bit] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AssetsDepreciationDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AssetsGuid] [uniqueidentifier] NULL,
	[BeginDate] [date] NULL,
	[EndDate] [date] NULL,
	[AssetsValue] [float] NULL,
	[ScrapValue] [float] NULL,
	[Add] [float] NULL,
	[Decrease] [float] NULL,
	[AssetsCalcValue] [float] NULL,
	[Age] [float] NULL,
	[IsDepreciationMonthly] [int] NULL,
	[DepreciationPercentYear] [float] NULL,
	[OldDepreciation] [float] NULL,
	[DepreciationValue] [float] NULL,
	[NewDepreciation] [float] NULL,
	[NewAssetsValue] [float] NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AssetsGroup](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[ParentGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AssetsOperation](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Flag] [int] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[AssetsGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[Age] [float] NULL,
	[ScrapValue] [float] NULL,
	[DebitCostGuid] [uniqueidentifier] NULL,
	[CreditCostGuid] [uniqueidentifier] NULL,
	[IsRounded] [bit] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bill](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[PayType] [int] NULL,
	[StoreGuid] [uniqueidentifier] NULL,
	[CustAccGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[Class] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[EntryGuid] [uniqueidentifier] NULL,
	[EntryNumber] [int] NULL,
	[CheckCreateEntry] [bit] NULL,
	[ItemsTotal] [float] NULL,
	[ItemsDiscount] [float] NULL,
	[ItemsExtra] [float] NULL,
	[BuExtra] [float] NULL,
	[BuDiscount] [float] NULL,
	[BuOnly] [varchar](500) NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[IsPosted] [bit] NULL,
	[AddFld1] [varchar](255) NULL,
	[AddFld2] [varchar](255) NULL,
	[AddFld3] [varchar](255) NULL,
	[AddFld4] [varchar](255) NULL,
	[AddFld5] [varchar](255) NULL,
	[AddFld6] [varchar](255) NULL,
	[AddFld7] [varchar](255) NULL,
	[AddFld8] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[MatGuid] [uniqueidentifier] NULL,
	[Qty] [float] NULL,
	[Qty2] [float] NULL,
	[Qty3] [float] NULL,
	[Price] [float] NULL,
	[TotalPrice] [float] NULL,
	[Bonus] [float] NULL,
	[StoreGuid] [uniqueidentifier] NULL,
	[DiscountPercent] [float] NULL,
	[Discount] [float] NULL,
	[ExtraPercent] [float] NULL,
	[Extra] [float] NULL,
	[Note] [varchar](256) NULL,
	[ProductDate] [date] NULL,
	[ExpireDate] [date] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Class] [varchar](256) NULL,
	[Length] [float] NULL,
	[width] [float] NULL,
	[height] [float] NULL,
	[Count] [float] NULL,
	[unityFact2] [float] NULL,
	[unityFact3] [float] NULL,
	[unityfix2] [bit] NULL,
	[unityfix3] [bit] NULL,
	[ItemUnit] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillDetail_Tmp](
	[Kind] [int] NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[BillKind] [int] NULL,
	[MatGuid] [uniqueidentifier] NULL,
	[Qty] [float] NULL,
	[Qty2] [float] NULL,
	[Qty3] [float] NULL,
	[Bonus] [float] NULL,
	[StoreGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillDiscount](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Discount] [float] NULL,
	[Extra] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[obverseAccountGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillNumber](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Kind] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillOrder](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[No] [int] NULL,
	[StoreNo] [int] NULL,
	[Date] [date] NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[StoreGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[ExpireDay] [int] NULL,
	[Note] [varchar](256) NULL,
	[CloseOrder] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillOrderDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[MatGuid] [uniqueidentifier] NULL,
	[unit] [int] NULL,
	[Qty] [float] NULL,
	[Price] [float] NULL,
	[StoreGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillOrderRecipient](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Srl] [float] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[No] [varchar](256) NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[SaleBillType] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[Driver] [varchar](256) NULL,
	[CarNo] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillOrderRecipientDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[MatGuid] [uniqueidentifier] NULL,
	[StoreGuid] [uniqueidentifier] NULL,
	[Qty] [float] NULL,
	[Qty2] [float] NULL,
	[Qty3] [float] NULL,
	[Price] [float] NULL,
	[ClassPtr] [varchar](256) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillOrderRecipientDiscountExtra](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AccountGUID] [uniqueidentifier] NULL,
	[Discount] [float] NULL,
	[Extra] [float] NULL,
	[CostGUID] [uniqueidentifier] NULL,
	[ContraAccGUID] [uniqueidentifier] NULL,
	[Notes] [varchar](250) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[BillKind] [int] NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[DefPrintPath] [varchar](256) NULL,
	[BillBarcode] [bit] NULL,
	[Note] [varchar](256) NULL,
	[PayType] [int] NULL,
	[Color1] [float] NULL,
	[Color2] [float] NULL,
	[DefMatAccountGuid] [uniqueidentifier] NULL,
	[DefCashAccountGuid] [uniqueidentifier] NULL,
	[DefCostGuid] [uniqueidentifier] NULL,
	[DefStoreGuid] [uniqueidentifier] NULL,
	[DefDiscountAccountGuid] [uniqueidentifier] NULL,
	[DefExtraAccountGuid] [uniqueidentifier] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[PostToStores] [bit] NULL,
	[PostToStoresAuto] [bit] NULL,
	[EntryCreated] [bit] NULL,
	[EntryCreatedAuto] [bit] NULL,
	[AutoPostedEntry] [bit] NULL,
	[OpPrice] [int] NULL,
	[SpecificPrice] [int] NULL,
	[PriceEffected] [bit] NULL,
	[DetailEntryByMat] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillTypeField](
	[BillTypeGuid] [uniqueidentifier] NULL,
	[FieldName] [varchar](256) NULL,
	[Visible] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[BillTypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Branch](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[Phone] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[ParentGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BrowsCard](
	[IdCard] [int] NULL,
	[CardGuid] [uniqueidentifier] NULL,
	[ComputerName] [varchar](50) NULL,
	[CheckRefrech] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Building](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[BuildingCode] [varchar](256) NULL,
	[Emirate] [varchar](256) NULL,
	[Area] [varchar](256) NULL,
	[Suburb] [varchar](256) NULL,
	[Street] [varchar](256) NULL,
	[LtnEmirate] [varchar](256) NULL,
	[LtnArea] [varchar](256) NULL,
	[LtnSuburb] [varchar](256) NULL,
	[LtnStreet] [varchar](256) NULL,
	[BasinNo] [varchar](256) NULL,
	[PieceNo] [varchar](256) NULL,
	[BuildAutoNumber] [varchar](256) NULL,
	[CouponNum] [varchar](256) NULL,
	[BuildingArea] [varchar](256) NULL,
	[LicenseType] [varchar](256) NULL,
	[BuildYear] [varchar](256) NULL,
	[ElecCounterNo] [varchar](256) NULL,
	[FloorCount] [int] NULL,
	[ApartmentCount] [int] NULL,
	[ApartmentCountOfFloor] [int] NULL,
	[ShopCount] [int] NULL,
	[Costunity] [float] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[AccountBankBuildingGuid] [uniqueidentifier] NULL,
	[BuildingAccountGuid] [uniqueidentifier] NULL,
	[CashAccountGuid] [uniqueidentifier] NULL,
	[InsuranceAccountGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[BankName] [varchar](256) NULL,
	[BankAccCode] [varchar](256) NULL,
	[ParentRentAccountGuid] [uniqueidentifier] NULL,
	[ParentRentInsuranceAccountGuid] [uniqueidentifier] NULL,
	[OpOwner] [int] NULL,
	[DatePurchase] [date] NULL,
	[AmountPurchase] [float] NULL,
	[CurrencyPurchase] [uniqueidentifier] NULL,
	[CurrencyvalPurchase] [float] NULL,
	[CustomerPurchase] [uniqueidentifier] NULL,
	[PurchaseNotes] [varchar](256) NULL,
	[CkReceiptBuilding] [bit] NULL,
	[ReceiptDate] [date] NULL,
	[ReceiptAmount] [float] NULL,
	[CurrencyReceipt] [uniqueidentifier] NULL,
	[CurrencyvalReceipt] [float] NULL,
	[ReceiptNote] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[OwnerAccountGuid] [uniqueidentifier] NULL,
	[IdentityValue] [float] NULL,
	[CurrencyIdentityGUID] [uniqueidentifier] NULL,
	[CurrencyValIdentity] [float] NULL,
	[IdentityBeginDate] [date] NULL,
	[IdentityEndDate] [date] NULL,
	[UsedEndDate] [bit] NULL,
	[BHouseFloor] [int] NULL,
	[BHouseFlatCount] [int] NULL,
	[MBalanceFloor] [int] NULL,
	[MBalanceFlatCount] [int] NULL,
	[OfficeFloor] [int] NULL,
	[OfficeCount] [int] NULL,
	[ParkingFloor] [int] NULL,
	[ParkingCount] [int] NULL,
	[ParkingFloorUnder] [int] NULL,
	[ParkingCountUnder] [int] NULL,
	[FlatDriverCount] [int] NULL,
	[FlatServantCount] [int] NULL,
	[StoreCount] [int] NULL,
	[CreateEntryPurchase] [bit] NULL,
	[CrearteEntryInvestment] [bit] NULL,
	[OwnerName] [uniqueidentifier] NULL,
	[CommissionPercent] [float] NULL,
	[AccountCommIncomeGuid] [uniqueidentifier] NULL,
	[AcCommissionFromOwnerGUID] [uniqueidentifier] NULL,
	[BuildingCost] [float] NULL,
	[BuildingNo] [varchar](256) NULL,
	[BondType] [varchar](256) NULL,
	[BondNo] [varchar](256) NULL,
	[BondDate] [date] NULL,
	[RentInfoGuid] [uniqueidentifier] NULL,
	[CkBuildingPayTypelow] [bit] NULL,
	[OwnerGuid] [uniqueidentifier] NULL,
	[ShowInContract] [bit] NULL,
	[ShowInReport] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_Building_Name_UNIQUE] UNIQUE NONCLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BuildingAssets](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AssetsGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BuildingGuard](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Adjective] [varchar](256) NULL,
	[PassportNO] [varchar](256) NULL,
	[PassportExpireDate] [date] NULL,
	[Nationality] [varchar](256) NULL,
	[LtnNationality] [varchar](256) NULL,
	[PersonalityNo] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[Phone] [varchar](256) NULL,
	[Mobile] [varchar](256) NULL,
	[EMail] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BuildingIdentity](
	[BuildingGuid] [uniqueidentifier] NULL,
	[OwnerAccountGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[BeginDate] [date] NULL,
	[cachEntryGuid] [uniqueidentifier] NULL,
	[InsuranceEntryGuid] [uniqueidentifier] NULL,
	[DoReconciliation] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BuildingIdentityDetail](
	[BuildingGuid] [uniqueidentifier] NULL,
	[RentName] [varchar](256) NULL,
	[BeginContractDate] [date] NULL,
	[EndContractDate] [date] NULL,
	[ContractPeriod] [float] NULL,
	[ContractValue] [float] NULL,
	[BeginInvestmentDate] [date] NULL,
	[DeservedDay] [float] NULL,
	[DeservedValue] [float] NULL,
	[checkValue] [float] NULL,
	[DeservedCashValue] [float] NULL,
	[InsuranceValue] [float] NULL,
	[FlatGuid] [uniqueidentifier] NULL,
	[Mobile] [varchar](256) NULL,
	[ContractNo] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Buildinglicense](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[No] [varchar](255) NULL,
	[Date] [date] NULL,
	[IssueDate] [date] NULL,
	[EndIssueDate] [date] NULL,
	[Owner] [varchar](255) NULL,
	[trademark] [varchar](255) NULL,
	[Worker] [varchar](255) NULL,
	[NoWorker] [varchar](255) NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BuildingOffer](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[BuildingCode] [varchar](256) NULL,
	[Emirate] [varchar](256) NULL,
	[Area] [varchar](256) NULL,
	[Suburb] [varchar](256) NULL,
	[Street] [varchar](256) NULL,
	[BasinNo] [varchar](256) NULL,
	[PieceNo] [varchar](256) NULL,
	[FloorCount] [int] NULL,
	[ApartmentCount] [int] NULL,
	[ApartmentCountOfFloor] [int] NULL,
	[ShopCount] [int] NULL,
	[Costunity] [float] NULL,
	[Note] [varchar](256) NULL,
	[BHouseFloor] [int] NULL,
	[BHouseFlatCount] [int] NULL,
	[MBalanceFloor] [int] NULL,
	[MBalanceFlatCount] [int] NULL,
	[OfficeFloor] [int] NULL,
	[OfficeCount] [int] NULL,
	[ParkingFloor] [int] NULL,
	[ParkingCount] [int] NULL,
	[ParkingFloorUnder] [int] NULL,
	[ParkingCountUnder] [int] NULL,
	[FlatDriverCount] [int] NULL,
	[FlatServantCount] [int] NULL,
	[StoreCount] [int] NULL,
	[BuildingNo] [varchar](256) NULL,
	[BondType] [varchar](256) NULL,
	[BondNo] [varchar](256) NULL,
	[BondDate] [date] NULL,
	[OfferKind] [int] NULL,
	[OfferValue] [float] NULL,
	[Delegated] [varchar](256) NULL,
	[MaxOfferValue] [float] NULL,
	[LandArea] [float] NULL,
	[LandAreaUnit] [varchar](256) NULL,
	[CustName] [varchar](256) NULL,
	[CustPhone] [varchar](256) NULL,
	[CustMobile] [varchar](256) NULL,
	[CustAddress] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_BuildingOffer_Name_UNIQUE] UNIQUE NONCLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BuildingPayType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Percentage] [float] NULL,
	[PayValue] [float] NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BuildingPlanConfig](
	[Tag] [int] NULL,
	[Kind] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BuildingPrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[BuildingGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BuildingRecElecCounter](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[UnNo] [varchar](255) NULL,
	[Service] [varchar](255) NULL,
	[Address] [varchar](255) NULL,
	[ElecCounterNo] [varchar](255) NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[OldCounter] [float] NULL,
	[OldDate] [date] NULL,
	[Counter] [float] NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CalcQty](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](256) NULL,
	[Equality] [varchar](8000) NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeBuildingGuard](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[GuardGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeCurrencyRate](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Date] [date] NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[Rate] [float] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeFlatPrice](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Price] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[Kind] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeFlatRent](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Price] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeLandRent](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Price] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeParkingPrice](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Price] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeParkingRent](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Price] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeShopPrice](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Price] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeShopRent](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Price] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeVillaPrice](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Price] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[Kind] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChangeVillaRent](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Price] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Checks](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Mark] [bit] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[NO] [varchar](256) NULL,
	[InternalNO] [varchar](256) NULL,
	[ReceiptNo] [float] NULL,
	[Value] [float] NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[Date] [date] NULL,
	[DueDate] [date] NULL,
	[endDueDate] [date] NULL,
	[NoneDueDate] [bit] NULL,
	[BankName] [varchar](256) NULL,
	[Account] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[ObverseAccount] [uniqueidentifier] NULL,
	[CostObverseGuid] [uniqueidentifier] NULL,
	[Beneficiary] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[Note2] [varchar](256) NULL,
	[Note3] [varchar](4000) NULL,
	[Note4] [varchar](4000) NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[SalesManGuid] [uniqueidentifier] NULL,
	[FolderDate] [date] NULL,
	[FolderInternalNo] [varchar](256) NULL,
	[FolderExternalNo] [varchar](256) NULL,
	[CheckCreateEntry] [bit] NULL,
	[IsRounded] [bit] NULL,
	[Deposition] [bit] NULL,
	[Lawsuit] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChecksAccountDetail](
	[ParentGuid] [uniqueidentifier] NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Kind] [int] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Percent] [float] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChecksCollection](
	[SecLvl] [int] NULL,
	[Date] [date] NULL,
	[CheckGuid] [uniqueidentifier] NULL,
	[DebitAccountGuid] [uniqueidentifier] NULL,
	[DebitCostGuid] [uniqueidentifier] NULL,
	[CreditAccountGuid] [uniqueidentifier] NULL,
	[CreditCostGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Commission] [float] NULL,
	[LossComm] [bit] NULL,
	[ReturnCause] [varchar](256) NULL,
	[CommAccountGuid] [uniqueidentifier] NULL,
	[CommAccountCreditGuid] [uniqueidentifier] NULL,
	[CommCostGuid] [uniqueidentifier] NULL,
	[CommNote] [varchar](256) NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[Note] [varchar](256) NULL,
	[Kind] [int] NULL,
	[Delay] [float] NULL,
	[DelayAccountDebitGuid] [uniqueidentifier] NULL,
	[DelayAccountCreditGuid] [uniqueidentifier] NULL,
	[DelayNote] [varchar](256) NULL,
	[DelayCostGuid] [uniqueidentifier] NULL,
	[Finished] [bit] NULL,
	[FinishDate] [date] NULL,
	[FixReturn] [bit] NULL,
	[FixReturnNote] [varchar](255) NULL,
	[IsRounded] [bit] NULL,
	[OperationCreateEntry] [bit] NULL,
	[ReturnCreateEntry] [bit] NULL,
	[CommCreateEntry] [bit] NULL,
	[Mark] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChecksCostDetail](
	[ParentGuid] [uniqueidentifier] NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Kind] [int] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Percent] [float] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChecksPartialCollection](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Mark] [bit] NULL,
	[Date] [date] NULL,
	[CheckGuid] [uniqueidentifier] NULL,
	[DebitAccountGuid] [uniqueidentifier] NULL,
	[DebitCostGuid] [uniqueidentifier] NULL,
	[CreditAccountGuid] [uniqueidentifier] NULL,
	[CreditCostGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Commission] [float] NULL,
	[LossComm] [bit] NULL,
	[CommAccountGuid] [uniqueidentifier] NULL,
	[CommAccountCreditGuid] [uniqueidentifier] NULL,
	[CommCostGuid] [uniqueidentifier] NULL,
	[CommNote] [varchar](256) NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[Note] [varchar](256) NULL,
	[IsRounded] [bit] NULL,
	[SecEntryGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[CheckKind] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[CreatedEntry] [bit] NULL,
	[AutoCreatedEntry] [bit] NULL,
	[AutoPostedEntry] [bit] NULL,
	[DefAccountGuid] [uniqueidentifier] NULL,
	[Posted] [bit] NULL,
	[PosdetCreatedEntry] [bit] NULL,
	[PosdetAutoCreatedEntry] [bit] NULL,
	[PosdetAutoPostedEntry] [bit] NULL,
	[PostedDefAccountGuid] [uniqueidentifier] NULL,
	[PostedDefCreditAccountGuid] [uniqueidentifier] NULL,
	[DefOwnerBuildingPosted] [bit] NULL,
	[DefCustPosted] [bit] NULL,
	[PostMoveCostDebit] [bit] NULL,
	[PostMoveCostCredit] [bit] NULL,
	[collected] [bit] NULL,
	[collectedCreatedEntry] [bit] NULL,
	[collectedAutoCreatedEntry] [bit] NULL,
	[CollectedEntryTypeGuid] [uniqueidentifier] NULL,
	[collectedAutoPostedEntry] [bit] NULL,
	[collectedSanctionBankAccountBuilding] [bit] NULL,
	[collectedSanctionCustObverse] [bit] NULL,
	[collectedDefAccountGuid] [uniqueidentifier] NULL,
	[collectedDefAccountObverseGuid] [uniqueidentifier] NULL,
	[CommAccountDebitGuid] [uniqueidentifier] NULL,
	[CommAccountCreditGuid] [uniqueidentifier] NULL,
	[CommOwnerBuilding] [bit] NULL,
	[DefBuildingComm] [bit] NULL,
	[CommType] [int] NULL,
	[DefBuildingIncomComm] [bit] NULL,
	[collectedMoveCostDebit] [bit] NULL,
	[collectedMoveCostCredit] [bit] NULL,
	[CommMoveCost] [bit] NULL,
	[CommMoveCostCredit] [bit] NULL,
	[partialcollected] [bit] NULL,
	[partialcollectedCreatedEntry] [bit] NULL,
	[partialcollectedAutoCreatedEntry] [bit] NULL,
	[partialCollectedEntryTypeGuid] [uniqueidentifier] NULL,
	[partialcollectedAutoPostedEntry] [bit] NULL,
	[partialcollectedSanctionBankAccountBuilding] [bit] NULL,
	[partialcollectedCachBankAccountBuilding] [bit] NULL,
	[partialcollectedSanctionCustObverse] [bit] NULL,
	[partialcollectedDefAccountGuid] [uniqueidentifier] NULL,
	[partialcollectedDefAccountObverseGuid] [uniqueidentifier] NULL,
	[partialMoveCostDebit] [bit] NULL,
	[partialMoveCostCredit] [bit] NULL,
	[Endorsement] [bit] NULL,
	[EndorsementCreatedEntry] [bit] NULL,
	[EndorsementAutoCreatedEntry] [bit] NULL,
	[EndorsementAutoPostedEntry] [bit] NULL,
	[EndorsementDefAccountDebitGuid] [uniqueidentifier] NULL,
	[EndorsementDefAccountCreateGuid] [uniqueidentifier] NULL,
	[EndorsementMoveCostDebit] [bit] NULL,
	[EndorsementMoveCostCredit] [bit] NULL,
	[Returned] [bit] NULL,
	[ReturnedCreatedEntry] [bit] NULL,
	[ReturnedAutoCreatedEntry] [bit] NULL,
	[ReturnedAutoPostedEntry] [bit] NULL,
	[ReturnedSanctionBankBuilding] [bit] NULL,
	[ReturnedSanctionBankBuildingCaseCollOnly] [bit] NULL,
	[ReturnedSanctionCustAccountDefAccount] [bit] NULL,
	[ReturnedDefAccountGuid] [uniqueidentifier] NULL,
	[ReturnedDefAccountCreditGuid] [uniqueidentifier] NULL,
	[EnableAtherOperationOnReturn] [bit] NULL,
	[ReturnMoveCostDebit] [bit] NULL,
	[ReturnMoveCostCredit] [bit] NULL,
	[delayDefAccountGuid] [uniqueidentifier] NULL,
	[delayDefAccountObverseGuid] [uniqueidentifier] NULL,
	[delaySanctionCustAccountDefAccount] [bit] NULL,
	[DefPrintPath] [varchar](256) NULL,
	[NoteForm1] [varchar](256) NULL,
	[LtnNoteForm1] [varchar](256) NULL,
	[NoteForm2] [varchar](256) NULL,
	[LtnNoteForm2] [varchar](256) NULL,
	[NotePosted] [varchar](256) NULL,
	[LtnNotePosted] [varchar](256) NULL,
	[Notecollected] [varchar](256) NULL,
	[LtnNotecollected] [varchar](256) NULL,
	[NotecollectedPartial] [varchar](256) NULL,
	[LtnNotecollectedPartial] [varchar](256) NULL,
	[NoteEndorsement] [varchar](256) NULL,
	[LtnNoteEndorsement] [varchar](256) NULL,
	[NoteReturn] [varchar](256) NULL,
	[LtnNoteReturn] [varchar](256) NULL,
	[NoteCommission] [varchar](256) NULL,
	[LtnNoteCommission] [varchar](256) NULL,
	[PartialNoteCommission] [varchar](256) NULL,
	[PartialLtnNoteCommission] [varchar](256) NULL,
	[ReturnNoteCommission] [varchar](256) NULL,
	[LtnReturnNoteCommission] [varchar](256) NULL,
	[PostedDate] [int] NULL,
	[partialcollectedDate] [int] NULL,
	[collectedDate] [int] NULL,
	[EndorsementDate] [int] NULL,
	[ReturnedDate] [int] NULL,
	[AutoSMSAfterAdd] [bit] NULL,
	[SMSMsg] [varchar](256) NULL,
	[SMSMsgEn] [varchar](256) NULL,
	[SMSChecksCollectionAutoSend] [bit] NULL,
	[SMSChecksCollectionImmediate] [bit] NULL,
	[SMSChecksCollectionDay] [int] NULL,
	[SMSChecksCollectionMsg] [varchar](800) NULL,
	[SMSChecksCollectionMsgEN] [varchar](800) NULL,
	[SMSChecksPartialCollectionAutoSend] [bit] NULL,
	[SMSChecksPartialCollectionMsg] [varchar](800) NULL,
	[SMSChecksPartialCollectionMsgEN] [varchar](800) NULL,
	[SMSCheckReturnAutoSend] [bit] NULL,
	[SMSCheckReturnImmediate] [bit] NULL,
	[SMSCheckReturnDay] [int] NULL,
	[SMSCheckReturnMsg] [varchar](800) NULL,
	[SMSCheckReturnMsgEn] [varchar](800) NULL,
	[SMSChecksDue] [bit] NULL,
	[SMSChecksDueDay] [int] NULL,
	[SMSChecksDueMsg] [varchar](800) NULL,
	[SMSChecksDueMsgEn] [varchar](800) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[CheckTypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Mark] [bit] NULL,
	[MarkEdit] [bit] NULL,
	[Markdel] [bit] NULL,
	[ShowMark] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL,
	[Posted] [bit] NULL,
	[DelPosted] [bit] NULL,
	[collected] [bit] NULL,
	[Delcollected] [bit] NULL,
	[partialcollected] [bit] NULL,
	[partialcollectedEdit] [bit] NULL,
	[partialcollectedDel] [bit] NULL,
	[Endorsement] [bit] NULL,
	[DelEndorsement] [bit] NULL,
	[Returned] [bit] NULL,
	[DelReturned] [bit] NULL,
	[CreateEntry] [bit] NULL,
	[ChangeAcc] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Complaint](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[No] [varchar](256) NULL,
	[Date] [date] NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[RealtyKind] [int] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[FlatGuid] [uniqueidentifier] NULL,
	[ShopGuid] [uniqueidentifier] NULL,
	[ParkingGuid] [uniqueidentifier] NULL,
	[VillaGuid] [uniqueidentifier] NULL,
	[LandGuid] [uniqueidentifier] NULL,
	[Note] [varchar](500) NULL,
	[ComplaintState] [int] NULL,
	[CloseDate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractAccountDetail](
	[ParentGuid] [uniqueidentifier] NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[AccountGuid] [uniqueidentifier] NULL,
	[Percent] [float] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractCachPayment](
	[ContractGuid] [uniqueidentifier] NULL,
	[EntryGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractFlatAssets](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ContractGuid] [uniqueidentifier] NULL,
	[AssetsGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractLandAssets](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ContractGuid] [uniqueidentifier] NULL,
	[AssetsGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractLog](
	[Guid] [uniqueidentifier] NOT NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[SecLvl] [int] NULL,
	[Date] [date] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[Note] [varchar](2500) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractParkingCachPayment](
	[ContractGuid] [uniqueidentifier] NULL,
	[EntryGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[ContractKind] [int] NULL,
	[IsAutoRenewal] [bit] NULL,
	[RevenueAccountGUID] [uniqueidentifier] NULL,
	[AcCommissionFromCustGUID] [uniqueidentifier] NULL,
	[AcCommissionFromOwnerGUID] [uniqueidentifier] NULL,
	[AccountContractPriceGUID] [uniqueidentifier] NULL,
	[AccountCertificatValueGUID] [uniqueidentifier] NULL,
	[FineAccountGUID] [uniqueidentifier] NULL,
	[DiscountAccountGUID] [uniqueidentifier] NULL,
	[TaxAccount] [uniqueidentifier] NULL,
	[OtherFeeAccount1GUID] [uniqueidentifier] NULL,
	[OtherFeeAccount2GUID] [uniqueidentifier] NULL,
	[OtherFeeAccount3GUID] [uniqueidentifier] NULL,
	[OtherFeeAccount4GUID] [uniqueidentifier] NULL,
	[OtherFeeAccount5GUID] [uniqueidentifier] NULL,
	[InsuranceAccountGuid] [uniqueidentifier] NULL,
	[ServesComm] [float] NULL,
	[Rentcondition] [varchar](2048) NULL,
	[MoveCost] [bit] NULL,
	[MoveCostCredit] [bit] NULL,
	[DefPrintPath] [varchar](256) NULL,
	[DefPrintLogPath] [varchar](256) NULL,
	[CreateEntry] [bit] NULL,
	[AutoCreateEntry] [bit] NULL,
	[AutoPostedEntry] [bit] NULL,
	[EntryDate] [int] NULL,
	[MoveCostWithIncom] [bit] NULL,
	[MoveCostWithInsurance] [bit] NULL,
	[MoveCostWithContractPrice] [bit] NULL,
	[MoveCostWithCertificat] [bit] NULL,
	[MoveCostWithFee] [bit] NULL,
	[MoveCostWithclientComm] [bit] NULL,
	[MoveCostWithOwnerComm] [bit] NULL,
	[MoveCostWithInconEndContract] [bit] NULL,
	[MoveCostWithFineEndContract] [bit] NULL,
	[MoveCostWithIncomCredit] [bit] NULL,
	[MoveCostWithInsuranceCredit] [bit] NULL,
	[MoveCostWithContractPriceCredit] [bit] NULL,
	[MoveCostWithCertificatCredit] [bit] NULL,
	[MoveCostWithFeeCredit] [bit] NULL,
	[MoveCostWithclientCommCredit] [bit] NULL,
	[MoveCostWithOwnerCommCredit] [bit] NULL,
	[MoveCostWithInconEndContractCredit] [bit] NULL,
	[MoveCostWithFineEndContractCredit] [bit] NULL,
	[MoveCostWithDiscount] [bit] NULL,
	[MoveCostWithDiscountCredit] [bit] NULL,
	[DefSmsMobile] [varchar](256) NULL,
	[AutoSMSAfterAdd] [bit] NULL,
	[SMSMsg] [varchar](256) NULL,
	[SMSMsgEn] [varchar](256) NULL,
	[AutoSMSAfterEnd] [bit] NULL,
	[EndSMSMsg] [varchar](256) NULL,
	[EndSMSMsgEn] [varchar](256) NULL,
	[EndContract] [bit] NULL,
	[ConstraintInsurance] [bit] NULL,
	[DefPrintReceipt] [varchar](256) NULL,
	[DefPrintacquittance] [varchar](256) NULL,
	[DeflawsuitDebitAccountGUID] [uniqueidentifier] NULL,
	[DeflawsuitCreditAccountGUID] [uniqueidentifier] NULL,
	[LawsuitCustAccount] [bit] NULL,
	[LawsuitCostwithDebitAccount] [bit] NULL,
	[LawsuitCostwithCreditAccount] [bit] NULL,
	[LawsuitLinkUser] [bit] NULL,
	[LawsuitLinkUserExpense] [bit] NULL,
	[UnearnedrRevenue] [bit] NULL,
	[AcIncomNextYearGUID] [uniqueidentifier] NULL,
	[AcCommissionExpenseGuid] [uniqueidentifier] NULL,
	[OpNewContract] [varchar](10) NULL,
	[FirstPayNote] [varchar](255) NULL,
	[FirstPayNoteLtn] [varchar](255) NULL,
	[ContractNote] [varchar](255) NULL,
	[ContractNoteLtn] [varchar](255) NULL,
	[FeeEntryNote] [varchar](255) NULL,
	[CanBeginDateAfterDate2] [bit] NULL,
	[GenEntryEnd] [bit] NULL,
	[DefPicTab] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractTypeFeeAccount](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractTypeFineAccount](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[ContractTypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Mark] [bit] NULL,
	[MarkEdit] [bit] NULL,
	[MarkDel] [bit] NULL,
	[ShowMark] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL,
	[Field7] [bit] NULL,
	[Field8] [bit] NULL,
	[Field9] [bit] NULL,
	[Field10] [bit] NULL,
	[Field11] [bit] NULL,
	[Field12] [bit] NULL,
	[Field13] [bit] NULL,
	[Field14] [bit] NULL,
	[Field15] [bit] NULL,
	[Field16] [bit] NULL,
	[Field17] [bit] NULL,
	[Field18] [bit] NULL,
	[Field19] [bit] NULL,
	[Field20] [bit] NULL,
	[Field21] [bit] NULL,
	[MaxDiscount] [float] NULL,
	[CustBalance] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractWorkFlow](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[Printed] [int] NULL,
	[Certification] [int] NULL,
	[CustStep1] [bit] NULL,
	[CustStepDate1] [date] NULL,
	[CustStep2] [bit] NULL,
	[CustStepDate2] [date] NULL,
	[CompStep1] [bit] NULL,
	[CompStepDate1] [date] NULL,
	[CompStep2] [bit] NULL,
	[CompStepDate2] [date] NULL,
	[CompStep3] [bit] NULL,
	[CompStepDate3] [date] NULL,
	[CompStep4] [bit] NULL,
	[CompStepDate4] [date] NULL,
	[CompStep5] [bit] NULL,
	[CompStepDate5] [date] NULL,
	[CompStep6] [bit] NULL,
	[CompStepDate6] [date] NULL,
	[CompStep7] [bit] NULL,
	[CompStepDate7] [date] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cost](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](250) NULL,
	[Name] [varchar](250) NULL,
	[LtnName] [varchar](250) NULL,
	[ParentGUID] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Currency](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](250) NULL,
	[LtnCode] [varchar](250) NULL,
	[Name] [varchar](250) NULL,
	[LtnName] [varchar](250) NULL,
	[CurrencyVal] [float] NULL,
	[EnPartName] [varchar](250) NULL,
	[ArPartName] [varchar](250) NULL,
	[Part] [float] NULL,
	[CurrencyRate] [float] NULL,
	[Note] [varchar](250) NULL,
	[OnlyName] [varchar](255) NULL,
	[OnlyPluralName] [varchar](255) NULL,
	[OnlyByCountryName] [varchar](255) NULL,
	[OnlyPartPlularName] [varchar](255) NULL,
	[OnlyLtnName] [varchar](255) NULL,
	[OnlyPluralLtnName] [varchar](255) NULL,
	[OnlyByCountryLtnName] [varchar](255) NULL,
	[OnlyPartPlularLtnName] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CurrentUsers](
	[UserGuid] [uniqueidentifier] NULL,
	[Spid] [int] NULL,
	[SecLvl] [int] NULL,
	[Admin] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Barcode] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[CardKind] [int] NULL,
	[CardKind2] [int] NULL,
	[CustKind] [int] NULL,
	[Nationality] [varchar](256) NULL,
	[LtnNationality] [varchar](256) NULL,
	[Profession] [varchar](256) NULL,
	[LtnProfession] [varchar](256) NULL,
	[PassportNO] [varchar](256) NULL,
	[PassportExpireDate] [date] NULL,
	[Domicile] [varchar](256) NULL,
	[Security] [varchar](256) NULL,
	[LtnSecurity] [varchar](256) NULL,
	[PhoneJob] [varchar](256) NULL,
	[Mobile] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[Trademark] [varchar](256) NULL,
	[LtnTrademark] [varchar](256) NULL,
	[AcGuid] [uniqueidentifier] NULL,
	[InsuranceAccountGuid] [uniqueidentifier] NULL,
	[MemoSecurity] [varchar](256) NULL,
	[LtnMemoSecurity] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[LtnAddress] [varchar](256) NULL,
	[BoxNo] [varchar](256) NULL,
	[PersonalityNo1] [varchar](256) NULL,
	[PersonalityNo2] [varchar](256) NULL,
	[Fax] [varchar](256) NULL,
	[EMail] [varchar](256) NULL,
	[Adjective] [varchar](256) NULL,
	[LtnAdjective] [varchar](256) NULL,
	[CkHideInSearch] [bit] NULL,
	[ban] [bit] NULL,
	[banContract] [bit] NULL,
	[BankName] [varchar](256) NULL,
	[BankAccCode] [varchar](256) NULL,
	[Birthday] [date] NULL,
	[DomicileEndDate] [date] NULL,
	[PersonalityEndDate] [date] NULL,
	[CustNote1] [varchar](256) NULL,
	[CustNote2] [varchar](256) NULL,
	[CustNote3] [varchar](256) NULL,
	[CustNote4] [varchar](256) NULL,
	[CustNote5] [varchar](256) NULL,
	[CustNote6] [varchar](256) NULL,
	[CustNote7] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_Customer_Name_UNIQUE] UNIQUE NONCLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DefaultMenuBank](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DefaultMenuLtnNationality](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DefaultMenuNationality](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DEntry](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[AcGuid] [uniqueidentifier] NULL,
	[Debit] [float] NULL,
	[Credit] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[ObverseAcGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
	[IsVisible] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DMD_const](
	[VName] [nvarchar](2048) NULL,
	[Value] [nvarchar](2048) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Earth](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[No] [varchar](256) NULL,
	[Ban] [bit] NULL,
	[EarthNo] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[CustomerGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[City] [varchar](256) NULL,
	[Region] [varchar](256) NULL,
	[Space] [varchar](256) NULL,
	[Area] [float] NULL,
	[Unity] [varchar](256) NULL,
	[Price] [float] NULL,
	[licenseNo] [varchar](256) NULL,
	[license] [varchar](256) NULL,
	[licenseDate] [date] NULL,
	[Details] [varchar](256) NULL,
	[LandType] [varchar](256) NULL,
	[Side] [varchar](256) NULL,
	[StreetName] [varchar](256) NULL,
	[StreetCount] [int] NULL,
	[Buildble] [bit] NULL,
	[LandOwner] [int] NULL,
	[BeginLandValue] [float] NULL,
	[CurrencyBeginLandGuid] [uniqueidentifier] NULL,
	[CurrencyValBeginLand] [float] NULL,
	[BeginLandCostGuid] [uniqueidentifier] NULL,
	[CurrencyPurchaseGuid] [uniqueidentifier] NULL,
	[CurrencyValPurchase] [float] NULL,
	[PurchaseNote] [varchar](256) NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[CuOwnerGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[BankAccountGuid] [uniqueidentifier] NULL,
	[CommissionPercent] [float] NULL,
	[AccountCommIncomeGuid] [uniqueidentifier] NULL,
	[UsedEndDate] [bit] NULL,
	[CustomerOwnerGuid] [uniqueidentifier] NULL,
	[OwnerAccountGuid] [uniqueidentifier] NULL,
	[IdentityValue] [float] NULL,
	[CurrencyIdentityGUID] [uniqueidentifier] NULL,
	[CurrencyValIdentity] [float] NULL,
	[IdentityBeginDate] [date] NULL,
	[IdentityEndDate] [date] NULL,
	[CrearteEntryInvestment] [bit] NULL,
	[IdentityEntryGuid] [uniqueidentifier] NULL,
	[IdentityNote] [varchar](256) NULL,
	[LtnLandType] [varchar](256) NULL,
	[LtnCity] [varchar](256) NULL,
	[LtnRegion] [varchar](256) NULL,
	[LtnSpace] [varchar](256) NULL,
	[Ltnlicense] [varchar](256) NULL,
	[Ltnside] [varchar](256) NULL,
	[Rent] [float] NULL,
	[RentCurrencyGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ElectricityBill](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Mark] [bit] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[IsCollect] [bit] NULL,
	[Date] [date] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[RealtyType] [int] NULL,
	[FlatGuid] [uniqueidentifier] NULL,
	[ShopGuid] [uniqueidentifier] NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[ElecCounterNo] [varchar](255) NULL,
	[Counter] [float] NULL,
	[OldCounter] [float] NULL,
	[Discount] [float] NULL,
	[Extra] [float] NULL,
	[Consumption] [float] NULL,
	[WaterCounterNo] [varchar](255) NULL,
	[WCounter] [float] NULL,
	[WOldCounter] [float] NULL,
	[RoundKind] [int] NULL,
	[TotalValue] [float] NULL,
	[IncomeAccountGuid] [uniqueidentifier] NULL,
	[ExtraAccountGuid] [uniqueidentifier] NULL,
	[DiscountAccountGuid] [uniqueidentifier] NULL,
	[WaterAccountGuid] [uniqueidentifier] NULL,
	[DrainageAccountGuid] [uniqueidentifier] NULL,
	[WaterValue] [float] NULL,
	[DrainageValue] [float] NULL,
	[FineAccountGuid] [uniqueidentifier] NULL,
	[FeeAccountGuid] [uniqueidentifier] NULL,
	[FineValue] [float] NULL,
	[FeeValue] [float] NULL,
	[Overdue] [float] NULL,
	[WaterNote] [varchar](256) NULL,
	[DrainageNote] [varchar](256) NULL,
	[DiscountNote] [varchar](256) NULL,
	[ExtraNote] [varchar](256) NULL,
	[ConsumptionNote] [varchar](256) NULL,
	[FineNote] [varchar](256) NULL,
	[FeeNote] [varchar](256) NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[CreateBilltEntry] [bit] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ElectricityCachPayment](
	[ContractGuid] [uniqueidentifier] NULL,
	[EntryGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ElectricityType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[CreatedEntry] [bit] NULL,
	[AutoCreatedEntry] [bit] NULL,
	[AutoPostedEntry] [bit] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[IncomeAccountGuid] [uniqueidentifier] NULL,
	[ExtraAccountGuid] [uniqueidentifier] NULL,
	[DiscountAccountGuid] [uniqueidentifier] NULL,
	[WaterAccountGuid] [uniqueidentifier] NULL,
	[DrainageAccountGuid] [uniqueidentifier] NULL,
	[WaterValue] [float] NULL,
	[DrainageValue] [float] NULL,
	[FineAccountGuid] [uniqueidentifier] NULL,
	[FeeAccountGuid] [uniqueidentifier] NULL,
	[FineValue] [float] NULL,
	[FeeValue] [float] NULL,
	[DefPrintPath] [varchar](256) NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[Calculate] [varchar](800) NULL,
	[Calculate2] [varchar](800) NULL,
	[DefCheckTypeGuid] [uniqueidentifier] NULL,
	[DefEntryTypeGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ElectricityTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[ElectricityTypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Mark] [bit] NULL,
	[MarkEdit] [bit] NULL,
	[MarkDel] [bit] NULL,
	[ShowMark] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL,
	[Field1] [bit] NULL,
	[Field2] [bit] NULL,
	[MaxDiscount] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntryDate](
	[Guid] [uniqueidentifier] NOT NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[SecLvl] [int] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[Kind] [int] NULL,
	[Mark] [bit] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Note] [varchar](256) NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntryDateDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[Date] [date] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[AcGuid] [uniqueidentifier] NULL,
	[Debit] [float] NULL,
	[Credit] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[ObverseAcGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntryDateType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[DefAccountGuid] [uniqueidentifier] NULL,
	[DebitField] [bit] NULL,
	[CreditField] [bit] NULL,
	[DebitCaption] [varchar](256) NULL,
	[CreditCaption] [varchar](256) NULL,
	[LtnDebitCaption] [varchar](256) NULL,
	[LtnCreditCaption] [varchar](256) NULL,
	[CkCurrency] [bit] NULL,
	[CkCost] [bit] NULL,
	[CkNote] [bit] NULL,
	[Color1] [int] NULL,
	[Color2] [int] NULL,
	[AutoPostedEntry] [bit] NULL,
	[OpMoveCostwithDefAccount] [bit] NULL,
	[NeedCostItem] [bit] NULL,
	[NeedNoteItem] [bit] NULL,
	[AutoSMSAfterAdd] [bit] NULL,
	[SMSMsg] [varchar](256) NULL,
	[SMSMsgEn] [varchar](256) NULL,
	[DefPrintPath] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntryDateTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[EntryTypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Mark] [bit] NULL,
	[MarkEdit] [bit] NULL,
	[MarkDel] [bit] NULL,
	[ShowMark] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL,
	[CreateEntry] [bit] NULL,
	[ChangeAcc] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntryType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[DefAccountGuid] [uniqueidentifier] NULL,
	[DebitField] [bit] NULL,
	[CreditField] [bit] NULL,
	[DebitCaption] [varchar](256) NULL,
	[CreditCaption] [varchar](256) NULL,
	[LtnDebitCaption] [varchar](256) NULL,
	[LtnCreditCaption] [varchar](256) NULL,
	[CkCurrency] [bit] NULL,
	[CkCurrencyRate] [bit] NULL,
	[CkCost] [bit] NULL,
	[CkNote] [bit] NULL,
	[Color1] [int] NULL,
	[Color2] [int] NULL,
	[ShowContractField] [bit] NULL,
	[ShowCostFromContract] [bit] NULL,
	[CreateEntry] [bit] NULL,
	[AutoCreateEntry] [bit] NULL,
	[AutoPostedEntry] [bit] NULL,
	[OpMoveCostwithDefAccount] [bit] NULL,
	[OpEntryForOneItem] [bit] NULL,
	[OpObverseNoteItem] [bit] NULL,
	[ObitemNotefromNote] [bit] NULL,
	[NeedCostItem] [bit] NULL,
	[NeedNoteItem] [bit] NULL,
	[AutoSMSAfterAdd] [bit] NULL,
	[SMSMsg] [varchar](256) NULL,
	[SMSMsgEn] [varchar](256) NULL,
	[DefPrintPath] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntryTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[EntryTypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Mark] [bit] NULL,
	[MarkEdit] [bit] NULL,
	[MarkDel] [bit] NULL,
	[ShowMark] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL,
	[CreateEntry] [bit] NULL,
	[ChangeAcc] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExternalTools](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](250) NULL,
	[Prog] [varchar](250) NULL,
	[ShortCut] [varchar](250) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatAssets](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AssetsGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuilding](
	[BuildingGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[BuildingAcGuid] [uniqueidentifier] NULL,
	[ProjectAcGuid] [uniqueidentifier] NULL,
	[ClientAcGuid] [uniqueidentifier] NULL,
	[CreateEntry] [bit] NULL,
	[EntryDate] [date] NULL,
	[FloorCount] [int] NULL,
	[FlatByFloor] [int] NULL,
	[RealFlatCount] [int] NULL,
	[Area] [float] NULL,
	[CostProject] [float] NULL,
	[Costunity] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[MBalanceFloor] [int] NULL,
	[BHouseFloor] [int] NULL,
	[ShopFloor] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuildingDetails](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[Color] [int] NULL,
	[Count] [int] NULL,
	[FlatKind] [varchar](256) NULL,
	[Type] [varchar](256) NULL,
	[Class] [varchar](256) NULL,
	[Area] [float] NULL,
	[Unity] [varchar](256) NULL,
	[Rent] [float] NULL,
	[CostPrice] [float] NULL,
	[SalePrice] [float] NULL,
	[SalePrice2] [float] NULL,
	[SalePrice3] [float] NULL,
	[FlatOwner] [int] NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[Details] [varchar](256) NULL,
	[Overlooking] [varchar](256) NULL,
	[OfferType] [int] NULL,
	[Restrained] [bit] NULL,
	[BathroomCount] [int] NULL,
	[BalconyCount] [int] NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuildingDetails_2](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[Floor] [varchar](8000) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuildingDetails_BHouse](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[Floor] [varchar](8000) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuildingDetails_FlatDriver](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[Floor] [varchar](8000) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuildingDetails_FlatServant](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[Floor] [varchar](8000) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuildingDetails_MBalance](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[Floor] [varchar](8000) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuildingDetails_Office](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[Floor] [varchar](8000) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuildingDetails_Parking](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[Floor] [varchar](8000) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuildingDetails_Shop](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[Floor] [varchar](8000) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatBuildingDetails_Store](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[BuildingGuid] [uniqueidentifier] NULL,
	[Floor] [varchar](8000) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatContractFee](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[EntryNumber] [int] NULL,
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[CreateEntry] [bit] NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatContractFine](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FlatContractReceiptNO](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[No] [varchar](256) NULL,
	[Date] [date] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Flatwallet](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[FlatGuid] [uniqueidentifier] NULL,
	[MainCost] [float] NULL,
	[Expense] [float] NULL,
	[BeginDate] [date] NULL,
	[SaleDate] [date] NULL,
	[SaleValue] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HEntry](
	[Guid] [uniqueidentifier] NOT NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[SecLvl] [int] NULL,
	[Mark] [bit] NULL,
	[Date] [date] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[Note] [varchar](256) NULL,
	[ParentKind] [int] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[IsPosted] [bit] NULL,
	[Debit] [float] NULL,
	[Credit] [float] NULL,
	[ItemCount] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [HEntry_Unique_Number] UNIQUE NONCLUSTERED 
(
	[Number] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HjrConfig](
	[hjrYear] [int] NULL,
	[hjrMonth] [int] NULL,
	[Date] [date] NULL,
	[Day] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HjrMonthDayCount](
	[Month] [int] NULL,
	[DayCount] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ImportAccTmp](
	[Id] [int] NULL,
	[Livel1Code] [varchar](255) NULL,
	[Livel2Code] [varchar](255) NULL,
	[Livel3Code] [varchar](255) NULL,
	[Livel4Code] [varchar](255) NULL,
	[Livel1Name] [varchar](255) NULL,
	[Livel2Name] [varchar](255) NULL,
	[Livel3Name] [varchar](255) NULL,
	[Livel4Name] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ImportMatTmp](
	[Id] [int] NULL,
	[GroupCode] [varchar](255) NULL,
	[GroupName] [varchar](255) NULL,
	[Code] [varchar](255) NULL,
	[Name] [varchar](255) NULL,
	[LtnName] [varchar](255) NULL,
	[MatType] [int] NULL,
	[SecLvl] [int] NULL,
	[unity1] [varchar](255) NULL,
	[Defunity1] [float] NULL,
	[Barcode] [varchar](255) NULL,
	[unity2] [varchar](255) NULL,
	[Defunity2] [bit] NULL,
	[unityFact2] [float] NULL,
	[UnityFix2] [bit] NULL,
	[Barcode2] [varchar](255) NULL,
	[unity3] [varchar](255) NULL,
	[Defunity3] [bit] NULL,
	[unityFact3] [float] NULL,
	[UnityFix3] [bit] NULL,
	[Barcode3] [varchar](255) NULL,
	[Price11] [float] NULL,
	[Price12] [float] NULL,
	[Price13] [float] NULL,
	[Price14] [float] NULL,
	[Price15] [float] NULL,
	[Price16] [float] NULL,
	[Price17] [float] NULL,
	[Price21] [float] NULL,
	[Price22] [float] NULL,
	[Price23] [float] NULL,
	[Price24] [float] NULL,
	[Price25] [float] NULL,
	[Price26] [float] NULL,
	[Price27] [float] NULL,
	[Price31] [float] NULL,
	[Price32] [float] NULL,
	[Price33] [float] NULL,
	[Price34] [float] NULL,
	[Price35] [float] NULL,
	[Price36] [float] NULL,
	[Price37] [float] NULL,
	[Note] [varchar](255) NULL,
	[State] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IncAccount](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[Band] [int] NULL,
	[Band2] [int] NULL,
	[CalcoldYearBalance] [bit] NULL,
	[ShowBalanceInListFinCenter] [bit] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IncAccountDetailAc](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IncAccountListDetail](
	[ParentGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IncomeSaved](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Date] [date] NULL,
	[FromDate] [date] NULL,
	[ToDate] [date] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IncomeSavedDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[strKind] [varchar](256) NULL,
	[RentPrice] [float] NULL,
	[FromDate] [date] NULL,
	[ToDate] [date] NULL,
	[EndDate] [date] NULL,
	[Days] [int] NULL,
	[DayPrice] [float] NULL,
	[DayPeriod] [int] NULL,
	[Income] [float] NULL,
	[ContractFinish] [bit] NULL,
	[Collection] [float] NULL,
	[CheckNotCollection] [float] NULL,
	[Cash] [float] NULL,
	[TotalPays] [float] NULL,
	[ContractRest] [float] NULL,
	[CustBalance] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InfofldCaption](
	[Cardid] [int] NULL,
	[id] [int] NULL,
	[FldCaption] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InfofldValue](
	[CardGuid] [uniqueidentifier] NULL,
	[Cardid] [int] NULL,
	[id] [int] NULL,
	[FldValue] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LandContract](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[EditDate] [date] NULL,
	[DeliverDate] [date] NULL,
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Mark] [bit] NULL,
	[IsAutoRenewal] [bit] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[ContractNo] [varchar](256) NULL,
	[CustomerGuid] [uniqueidentifier] NULL,
	[SalesManGuid] [uniqueidentifier] NULL,
	[RentInfoGuid] [uniqueidentifier] NULL,
	[LandGuid] [uniqueidentifier] NULL,
	[VillaGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Rent] [float] NULL,
	[RentContractType] [int] NULL,
	[MonthlyValue] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[PayType] [int] NULL,
	[Note] [varchar](8000) NULL,
	[Note2] [varchar](8000) NULL,
	[Purpose] [varchar](256) NULL,
	[NewState] [int] NULL,
	[Whereabouts] [varchar](256) NULL,
	[RevenueAccountGuid] [uniqueidentifier] NULL,
	[CustAccountGuid] [uniqueidentifier] NULL,
	[CommissionFromCustPercent] [float] NULL,
	[CommissionFromCustValue] [float] NULL,
	[AcCommissionFromCustGuid] [uniqueidentifier] NULL,
	[CommissionFromOwnerPercent] [float] NULL,
	[CommissionFromOwnerValue] [float] NULL,
	[AcCommissionFromOwnerGuid] [uniqueidentifier] NULL,
	[CommissionFromSalesManrPercent] [float] NULL,
	[CommissionFromSalesManValue] [float] NULL,
	[AcSalesManCommissionGuid] [uniqueidentifier] NULL,
	[AcCommissionExpenseGuid] [uniqueidentifier] NULL,
	[SalesManCommNote] [varchar](256) NULL,
	[CreateContractEntry] [bit] NULL,
	[AcIncomNextYearGUID] [uniqueidentifier] NULL,
	[InsuranceAccountGuid] [uniqueidentifier] NULL,
	[Step1Complete] [bit] NULL,
	[Step2Complete] [bit] NULL,
	[Step3Complete] [bit] NULL,
	[Step4Complete] [bit] NULL,
	[Step5Complete] [bit] NULL,
	[Certification] [varchar](256) NULL,
	[DiscountPercent] [float] NULL,
	[DiscountValue] [float] NULL,
	[DiscountAccountGuid] [uniqueidentifier] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[RentDuration] [varchar](256) NULL,
	[Rentype] [varchar](256) NULL,
	[TermsOfPayment] [varchar](256) NULL,
	[InsuranceValuePercent] [float] NULL,
	[InsuranceValue] [float] NULL,
	[InsuranceValueOld] [float] NULL,
	[ContractPrice] [float] NULL,
	[CertificatValue] [float] NULL,
	[ElectricityInsurance] [float] NULL,
	[ElectricityCounter] [varchar](256) NULL,
	[FromDate] [date] NULL,
	[ToDate] [date] NULL,
	[Period] [int] NULL,
	[OtherFee] [float] NULL,
	[OtherFeeAccountGUID] [uniqueidentifier] NULL,
	[OtherFee1] [float] NULL,
	[OtherFeeAccount1GUID] [uniqueidentifier] NULL,
	[OtherFee2] [float] NULL,
	[OtherFeeAccount2GUID] [uniqueidentifier] NULL,
	[OtherFee3] [float] NULL,
	[OtherFeeAccount3GUID] [uniqueidentifier] NULL,
	[OtherFee4] [float] NULL,
	[OtherFeeAccount4GUID] [uniqueidentifier] NULL,
	[OtherFee5] [float] NULL,
	[OtherFeeAccount5GUID] [uniqueidentifier] NULL,
	[ContractFinish] [bit] NULL,
	[ContractFinishDate] [date] NULL,
	[EditContractFinishDate] [date] NULL,
	[ResultingAmount2] [float] NULL,
	[ResultingAmount] [float] NULL,
	[RoundKind] [int] NULL,
	[FineRevenueAccountGUID] [uniqueidentifier] NULL,
	[ResultingNote] [varchar](256) NULL,
	[Fine] [float] NULL,
	[FineAccount] [uniqueidentifier] NULL,
	[FineNote] [varchar](256) NULL,
	[CreateResultingEntry] [bit] NULL,
	[AccountContractPrice] [uniqueidentifier] NULL,
	[AccountCertificatValue] [uniqueidentifier] NULL,
	[License1No] [varchar](256) NULL,
	[License2No] [varchar](256) NULL,
	[License3No] [varchar](256) NULL,
	[License1Date1] [date] NULL,
	[License2Date1] [date] NULL,
	[License3Date1] [date] NULL,
	[License1Date2] [date] NULL,
	[License2Date2] [date] NULL,
	[License3Date2] [date] NULL,
	[Ltnwhereabouts] [varchar](256) NULL,
	[LtnPurpose] [varchar](256) NULL,
	[LtnRentDuration] [varchar](256) NULL,
	[LtnRentype] [varchar](256) NULL,
	[LtnTermsOfPayment] [varchar](256) NULL,
	[IsRounded] [bit] NULL,
	[Leave] [bit] NULL,
	[LeaveDate] [date] NULL,
	[AcquittancePrinted] [bit] NULL,
	[AcquittancePrintDate] [date] NULL,
	[AcquittancePrintedByGuid] [uniqueidentifier] NULL,
	[Judicial] [bit] NULL,
	[Trademark] [varchar](256) NULL,
	[PrvContractGuid] [uniqueidentifier] NULL,
	[AddPercent] [float] NULL,
	[AddValue] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LandContractCachPayment](
	[ContractGuid] [uniqueidentifier] NULL,
	[EntryGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LandContractFee](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[EntryNumber] [int] NULL,
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[CreateEntry] [bit] NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LandContractReceiptNO](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[No] [varchar](256) NULL,
	[Date] [date] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LandOffer](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[LandNo] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[Customer] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[OfferKind] [int] NULL,
	[OfferValue] [float] NULL,
	[City] [varchar](256) NULL,
	[Region] [varchar](256) NULL,
	[Space] [varchar](256) NULL,
	[Area] [float] NULL,
	[Unity] [varchar](256) NULL,
	[license] [varchar](256) NULL,
	[Details] [varchar](256) NULL,
	[LandType] [varchar](256) NULL,
	[Side] [varchar](256) NULL,
	[StreetCount] [int] NULL,
	[Buildble] [bit] NULL,
	[Delegated] [varchar](256) NULL,
	[CustPhone] [varchar](256) NULL,
	[CustMobile] [varchar](256) NULL,
	[MaxOfferValue] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Landwallet](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[LandGuid] [uniqueidentifier] NULL,
	[MainCost] [float] NULL,
	[Expense] [float] NULL,
	[BeginDate] [date] NULL,
	[SaleDate] [date] NULL,
	[SaleValue] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LastLoginUser](
	[UserName] [varchar](256) NULL,
	[HostName] [varchar](256) NULL,
	[Date] [date] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lawsuit](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[StartDate] [date] NULL,
	[No] [varchar](256) NULL,
	[OpenDate] [date] NULL,
	[ExecDate] [date] NULL,
	[StopExec] [bit] NULL,
	[StopExecDate] [date] NULL,
	[StopExecNote] [varchar](256) NULL,
	[StopPayDate] [date] NULL,
	[QuittanceDate] [date] NULL,
	[QuittanceElectricityDate] [date] NULL,
	[Rent] [float] NULL,
	[IsEnded] [bit] NULL,
	[EndDate] [date] NULL,
	[ExeNo] [varchar](256) NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[LawyerRent] [float] NULL,
	[LawyerRentDate] [date] NULL,
	[LawyerEntry] [bit] NULL,
	[LawyerDebitAccountGuid] [uniqueidentifier] NULL,
	[LawyerCreditAccountGuid] [uniqueidentifier] NULL,
	[LawyerNote] [varchar](256) NULL,
	[maintenanceRent] [float] NULL,
	[maintenanceRentDate] [date] NULL,
	[maintenanceEntry] [bit] NULL,
	[maintenanceDebitAccountGuid] [uniqueidentifier] NULL,
	[maintenanceCreditAccountGuid] [uniqueidentifier] NULL,
	[maintenanceNote] [varchar](256) NULL,
	[Furniture] [float] NULL,
	[FurnitureDate] [date] NULL,
	[FurnitureEntry] [bit] NULL,
	[FurnitureDebitAccountGuid] [uniqueidentifier] NULL,
	[FurnitureCreditAccountGuid] [uniqueidentifier] NULL,
	[FurnitureNote] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[EntryGuid1] [uniqueidentifier] NULL,
	[EntryGuid2] [uniqueidentifier] NULL,
	[EntryGuid3] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LawsuitExpense](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[CreateEntry] [bit] NULL,
	[EntryDate] [date] NULL,
	[CustRecovery] [bit] NULL,
	[ReceiptNo] [varchar](256) NULL,
	[ReceiptDate] [date] NULL,
	[ReceiptValue] [float] NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[Reference] [varchar](256) NULL,
	[ReceiptNote] [varchar](256) NULL,
	[DebitAccountGuid] [uniqueidentifier] NULL,
	[CreditAccountGuid] [uniqueidentifier] NULL,
	[DebitCostGuid] [uniqueidentifier] NULL,
	[CreditCostGuid] [uniqueidentifier] NULL,
	[DebitNote] [varchar](256) NULL,
	[CreditNote] [varchar](256) NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
	[OneNote] [bit] NULL,
	[IsRounded] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LawsuitState](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[State] [varchar](256) NULL,
	[Date] [date] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeaseApartment](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[EditDate] [date] NULL,
	[DeliverDate] [date] NULL,
	[Mark] [bit] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[ContractNo] [varchar](256) NULL,
	[IsAutoRenewal] [bit] NULL,
	[CustomerGuid] [uniqueidentifier] NULL,
	[RentInfoGuid] [uniqueidentifier] NULL,
	[SalesManGuid] [uniqueidentifier] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[ApartmentGuid] [uniqueidentifier] NULL,
	[ApartmentType] [varchar](256) NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[FromDate] [date] NULL,
	[ToDate] [date] NULL,
	[Period] [int] NULL,
	[RentContractType] [int] NULL,
	[Rent] [float] NULL,
	[MonthlyValue] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[PayType] [int] NULL,
	[Note] [varchar](8000) NULL,
	[Note2] [varchar](8000) NULL,
	[Trademark] [varchar](256) NULL,
	[Purpose] [varchar](256) NULL,
	[Whereabouts] [varchar](256) NULL,
	[LeaseKind] [int] NULL,
	[RevenueAccountGuid] [uniqueidentifier] NULL,
	[CustAccountGuid] [uniqueidentifier] NULL,
	[CommissionFromCustPercent] [float] NULL,
	[CommissionFromCustValue] [float] NULL,
	[AcCommissionFromCustGuid] [uniqueidentifier] NULL,
	[AcCommissionFromCustNote] [varchar](256) NULL,
	[CommissionFromOwnerPercent] [float] NULL,
	[CommissionFromOwnerValue] [float] NULL,
	[AcCommissionFromOwnerGuid] [uniqueidentifier] NULL,
	[AcCommissionFromOwnerNote] [varchar](256) NULL,
	[CommissionFromSalesManrPercent] [float] NULL,
	[CommissionFromSalesManValue] [float] NULL,
	[AcSalesManCommissionGuid] [uniqueidentifier] NULL,
	[AcCommissionExpenseGuid] [uniqueidentifier] NULL,
	[SalesManCommNote] [varchar](256) NULL,
	[CreateContractEntry] [bit] NULL,
	[ContractFinish] [bit] NULL,
	[ContractFinishDate] [date] NULL,
	[EditContractFinishDate] [date] NULL,
	[ResultingAmount] [float] NULL,
	[ResultingAmount2] [float] NULL,
	[RoundKind] [int] NULL,
	[ResultingNote] [varchar](256) NULL,
	[Fine] [float] NULL,
	[FineAccount] [uniqueidentifier] NULL,
	[CreateResultingEntry] [bit] NULL,
	[FineNote] [varchar](256) NULL,
	[InsuranceValuePercent] [float] NULL,
	[InsuranceValue] [float] NULL,
	[InsuranceAccountGuid] [uniqueidentifier] NULL,
	[InsuranceValueOld] [float] NULL,
	[ContractPrice] [float] NULL,
	[AccountContractPrice] [uniqueidentifier] NULL,
	[CertificatValue] [float] NULL,
	[AccountCertificatValue] [uniqueidentifier] NULL,
	[AcIncomNextYearGUID] [uniqueidentifier] NULL,
	[RentDuration] [varchar](256) NULL,
	[Rentype] [varchar](256) NULL,
	[TermsOfPayment] [varchar](256) NULL,
	[ResidentCount] [int] NULL,
	[ElectricityInsurance] [float] NULL,
	[Step1Complete] [bit] NULL,
	[Step2Complete] [bit] NULL,
	[Step3Complete] [bit] NULL,
	[Step4Complete] [bit] NULL,
	[Step5Complete] [bit] NULL,
	[Certification] [varchar](256) NULL,
	[DiscountPercent] [float] NULL,
	[DiscountValue] [float] NULL,
	[DiscountAccountGuid] [uniqueidentifier] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[ElectricityCounter] [float] NULL,
	[FineRevenueAccountGUID] [uniqueidentifier] NULL,
	[NewState] [int] NULL,
	[OtherFee] [float] NULL,
	[OtherFeeAccountGUID] [uniqueidentifier] NULL,
	[License1No] [varchar](256) NULL,
	[License2No] [varchar](256) NULL,
	[License3No] [varchar](256) NULL,
	[License1Date1] [date] NULL,
	[License2Date1] [date] NULL,
	[License3Date1] [date] NULL,
	[License1Date2] [date] NULL,
	[License2Date2] [date] NULL,
	[License3Date2] [date] NULL,
	[Ltnwhereabouts] [varchar](256) NULL,
	[LtnPurpose] [varchar](256) NULL,
	[LtnRentDuration] [varchar](256) NULL,
	[LtnRentype] [varchar](256) NULL,
	[LtnTermsOfPayment] [varchar](256) NULL,
	[IsRounded] [bit] NULL,
	[Leave] [bit] NULL,
	[LeaveDate] [date] NULL,
	[CountOldContract] [int] NULL,
	[CountCurrentContract] [int] NULL,
	[AcquittancePrinted] [bit] NULL,
	[AcquittancePrintDate] [date] NULL,
	[AcquittancePrintedByGuid] [uniqueidentifier] NULL,
	[Judicial] [bit] NULL,
	[IsReturnInsurance] [bit] NULL,
	[ReturnInsuranceDate] [date] NULL,
	[PrvContractGuid] [uniqueidentifier] NULL,
	[AddPercent] [float] NULL,
	[AddValue] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LinkCe](
	[Guid] [uniqueidentifier] NULL,
	[CeGuid] [uniqueidentifier] NULL,
	[Kind] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LinkCheckContract](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Kind] [int] NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[Percent] [float] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LinkEntry_Checks](
	[CheckGuid] [uniqueidentifier] NULL,
	[EntryGuid] [uniqueidentifier] NULL,
	[EntryNum] [int] NULL,
	[Kind] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LinkEntryType_Checks](
	[CheckGuid] [uniqueidentifier] NULL,
	[EntryGuid] [uniqueidentifier] NULL,
	[EntryNum] [int] NULL,
	[Kind] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LinkParkingContract](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[ParkingContractGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ListOrderTypeGroups](
	[Spid] [int] NULL,
	[GroupGuid] [uniqueidentifier] NULL,
	[OrderTypeGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LockCard](
	[IdCard] [int] NULL,
	[CardGuid] [uniqueidentifier] NULL,
	[ComputerName] [varchar](50) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LogFile](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](50) NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[ComputerName] [varchar](50) NULL,
	[CardId] [int] NULL,
	[ODate] [date] NULL,
	[Opration] [varchar](100) NULL,
	[Note] [varchar](250) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceContract](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[EditDate] [date] NULL,
	[Mark] [bit] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[ContractNo] [varchar](256) NULL,
	[CustomerGuid] [uniqueidentifier] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[FromDate] [date] NULL,
	[ToDate] [date] NULL,
	[Period] [int] NULL,
	[PeriodType] [int] NULL,
	[Rent] [float] NULL,
	[MonthlyValue] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[PayType] [int] NULL,
	[Note] [varchar](8000) NULL,
	[Note2] [varchar](8000) NULL,
	[Trademark] [varchar](256) NULL,
	[Purpose] [varchar](256) NULL,
	[Whereabouts] [varchar](256) NULL,
	[IncomeAccountGUID] [uniqueidentifier] NULL,
	[CustAccountGuid] [uniqueidentifier] NULL,
	[CreateContractEntry] [bit] NULL,
	[ContractFinish] [bit] NULL,
	[ContractFinishDate] [date] NULL,
	[ResultingAmount] [float] NULL,
	[ResultingAmount2] [float] NULL,
	[RoundKind] [int] NULL,
	[ResultingNote] [varchar](256) NULL,
	[CreateResultingEntry] [bit] NULL,
	[RentDuration] [varchar](256) NULL,
	[Rentype] [varchar](256) NULL,
	[TermsOfPayment] [varchar](256) NULL,
	[DiscountPercent] [float] NULL,
	[DiscountValue] [float] NULL,
	[DiscountAccountGuid] [uniqueidentifier] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[FineExpenceAccountGUID] [uniqueidentifier] NULL,
	[NewState] [int] NULL,
	[OtherFee] [float] NULL,
	[OtherFeeAccountGUID] [uniqueidentifier] NULL,
	[License1No] [varchar](256) NULL,
	[License2No] [varchar](256) NULL,
	[License3No] [varchar](256) NULL,
	[License1Date1] [date] NULL,
	[License2Date1] [date] NULL,
	[License3Date1] [date] NULL,
	[License1Date2] [date] NULL,
	[License2Date2] [date] NULL,
	[License3Date2] [date] NULL,
	[Ltnwhereabouts] [varchar](256) NULL,
	[LtnPurpose] [varchar](256) NULL,
	[LtnRentDuration] [varchar](256) NULL,
	[LtnRentype] [varchar](256) NULL,
	[LtnTermsOfPayment] [varchar](256) NULL,
	[IsRounded] [bit] NULL,
	[CountOldContract] [int] NULL,
	[AcquittancePrinted] [bit] NULL,
	[AcquittancePrintDate] [date] NULL,
	[AcquittancePrintedByGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceContractCachPayment](
	[ContractGuid] [uniqueidentifier] NULL,
	[EntryGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceContractMaintenanceItem](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ContractGuid] [uniqueidentifier] NULL,
	[MaintenanceItemGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceContractType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[IncomeAccountGUID] [uniqueidentifier] NULL,
	[DiscountAccountGUID] [uniqueidentifier] NULL,
	[Rentcondition] [varchar](2048) NULL,
	[DefPrintPath] [varchar](256) NULL,
	[CreateEntry] [bit] NULL,
	[AutoCreateEntry] [bit] NULL,
	[AutoPostedEntry] [bit] NULL,
	[EntryDate] [int] NULL,
	[MoveCostWithExpenceDebit] [bit] NULL,
	[MoveCostWithExpenceCredit] [bit] NULL,
	[MoveCostWithDiscountDebit] [bit] NULL,
	[MoveCostWithDiscountCredit] [bit] NULL,
	[DefPrintReceipt] [varchar](256) NULL,
	[DefPrintLogPath] [varchar](256) NULL,
	[DefPrintacquittance] [varchar](256) NULL,
	[FirstPayNote] [varchar](255) NULL,
	[FirstPayNoteLtn] [varchar](255) NULL,
	[ContractNote] [varchar](255) NULL,
	[ContractNoteLtn] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceContractTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[ContractTypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Mark] [bit] NULL,
	[MarkEdit] [bit] NULL,
	[MarkDel] [bit] NULL,
	[ShowMark] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL,
	[Field7] [bit] NULL,
	[Field8] [bit] NULL,
	[Field9] [bit] NULL,
	[Field10] [bit] NULL,
	[Field11] [bit] NULL,
	[Field12] [bit] NULL,
	[Field13] [bit] NULL,
	[Field14] [bit] NULL,
	[Field15] [bit] NULL,
	[Field16] [bit] NULL,
	[Field17] [bit] NULL,
	[Field18] [bit] NULL,
	[Field19] [bit] NULL,
	[Field20] [bit] NULL,
	[Field21] [bit] NULL,
	[MaxDiscount] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceContractVisit](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[WithOutContract] [bit] NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[No] [varchar](255) NULL,
	[Date] [date] NULL,
	[ExecState] [int] NULL,
	[ExecDate] [date] NULL,
	[MaintenanceWorkerGuid] [uniqueidentifier] NULL,
	[FeeAccountGuid] [uniqueidentifier] NULL,
	[ExecNote] [varchar](max) NULL,
	[NotExecNote] [varchar](max) NULL,
	[WorkNote] [varchar](max) NULL,
	[CreateEntry] [bit] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[EntryDebitCostGuid] [uniqueidentifier] NULL,
	[EntryCreditCostGuid] [uniqueidentifier] NULL,
	[EntryNote] [varchar](255) NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceContractVisitRealty](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[RealtyGuid] [uniqueidentifier] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceContractVisitWorker](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[HourCount] [float] NULL,
	[Fee] [float] NULL,
	[WorkerGuid] [uniqueidentifier] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceItem](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](255) NULL,
	[LtnName] [varchar](255) NULL,
	[DefValue] [float] NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceOrder](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[No] [varchar](256) NULL,
	[ComplaintGuid] [uniqueidentifier] NULL,
	[MaintenanceWorkerGuid] [uniqueidentifier] NULL,
	[WorkKInd] [varchar](256) NULL,
	[StartDate] [date] NULL,
	[EndExpectedDate] [date] NULL,
	[CloseDate] [date] NULL,
	[OrderState] [int] NULL,
	[ReasonNotRealized] [varchar](256) NULL,
	[Convertto] [varchar](256) NULL,
	[ConvertNote] [varchar](256) NULL,
	[Realized] [varchar](256) NULL,
	[Mat] [varchar](256) NULL,
	[Reason] [varchar](256) NULL,
	[repitition] [int] NULL,
	[delay] [int] NULL,
	[DelayReason] [varchar](256) NULL,
	[CreateEntry] [bit] NULL,
	[EntryDate] [date] NULL,
	[EntryValue] [float] NULL,
	[EntryCurrencyGUID] [uniqueidentifier] NULL,
	[EntryCurrencyVal] [float] NULL,
	[DebitAccountGuid] [uniqueidentifier] NULL,
	[CreditAccountGuid] [uniqueidentifier] NULL,
	[DebitCostGuid] [uniqueidentifier] NULL,
	[CreditCostGuid] [uniqueidentifier] NULL,
	[EntryNote] [varchar](255) NULL,
	[Note2] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MaintenanceWorker](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[BirthDate] [date] NULL,
	[PassportNO] [varchar](256) NULL,
	[PassportExpireDate] [date] NULL,
	[StayExpireDate] [date] NULL,
	[PersonalityNo1] [varchar](256) NULL,
	[PersonalityNo2] [varchar](256) NULL,
	[Profession] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[Phone] [varchar](256) NULL,
	[Mobile] [varchar](256) NULL,
	[Nationality] [varchar](256) NULL,
	[LtnNationality] [varchar](256) NULL,
	[Security] [varchar](256) NULL,
	[MemoSecurity] [varchar](256) NULL,
	[Domicile] [varchar](256) NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_MaintenanceWorker_Name_UNIQUE] UNIQUE NONCLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MapsConfig](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Country] [varchar](256) NULL,
	[City] [varchar](256) NULL,
	[Map1] [varchar](256) NULL,
	[Map2] [varchar](256) NULL,
	[Map3] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MapsObject](
	[Guid] [uniqueidentifier] NOT NULL,
	[MapGuid] [uniqueidentifier] NULL,
	[X] [int] NULL,
	[Y] [int] NULL,
	[Kind] [int] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[LandGuid] [uniqueidentifier] NULL,
	[VillaGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Mat](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Unity1] [varchar](256) NULL,
	[Unity2] [varchar](256) NULL,
	[Unity3] [varchar](256) NULL,
	[Barcode1] [varchar](256) NULL,
	[Barcode2] [varchar](256) NULL,
	[Barcode3] [varchar](256) NULL,
	[DefUnity] [int] NULL,
	[unityFact2] [float] NULL,
	[unityFact3] [float] NULL,
	[unityfix2] [bit] NULL,
	[unityfix3] [bit] NULL,
	[Note] [varchar](256) NULL,
	[GroupGuid] [uniqueidentifier] NULL,
	[MatType] [int] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[AvgPrice] [float] NULL,
	[LastPriceDate] [date] NULL,
	[LastPrice] [float] NULL,
	[MaxPrice] [float] NULL,
	[SaleAvgPrice] [float] NULL,
	[SaleLastPriceDate] [date] NULL,
	[SaleLastPrice] [float] NULL,
	[SaleMaxPrice] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MatBalance](
	[ParentGuid] [uniqueidentifier] NULL,
	[StoreGuid] [uniqueidentifier] NULL,
	[Qty] [float] NULL,
	[Qty2] [float] NULL,
	[Qty3] [float] NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MatDescription](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[MatGuid] [uniqueidentifier] NULL,
	[Name] [varchar](256) NULL,
	[Value] [varchar](256) NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MatDescriptionConfig](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Kind] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MatGroup](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[ParentGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MatMinMax](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[StoreGuid] [uniqueidentifier] NULL,
	[Minimum] [float] NULL,
	[Maximum] [float] NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MatUnitsPrice](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[MatGuid] [uniqueidentifier] NULL,
	[PriceKind] [varchar](256) NULL,
	[Price1] [float] NULL,
	[Price2] [float] NULL,
	[Price3] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MenuPrivilege](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[UserGuid] [uniqueidentifier] NULL,
	[MenuName] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MovingAccount](
	[AccountGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MsgTbl](
	[Guid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Msg] [varchar](256) NULL,
	[ToUserGuid] [uniqueidentifier] NULL,
	[FromUserGuid] [uniqueidentifier] NULL,
	[FlagSend] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OfferPrice](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Date] [date] NULL,
	[No] [varchar](256) NULL,
	[CustomerName] [varchar](256) NULL,
	[CustomerPhone] [varchar](256) NULL,
	[OfferKind] [int] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[RealtyGuid] [uniqueidentifier] NULL,
	[Price] [float] NULL,
	[DiscountPercent] [float] NULL,
	[DiscountValue] [float] NULL,
	[PriceAfterDiscount] [float] NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[FirstPay] [float] NULL,
	[FirstPayDate] [date] NULL,
	[InstCount] [int] NULL,
	[More] [int] NULL,
	[InstType] [int] NULL,
	[FirstinsDate] [date] NULL,
	[OneInstallment] [float] NULL,
	[LastPay] [float] NULL,
	[Details] [varchar](500) NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OfferPriceFee](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OfferPriceIns](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[DueDate] [date] NULL,
	[Value] [float] NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OldYearConfig](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[dbName] [varchar](256) NULL,
	[BeginEntryNo] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OnlyCheck](
	[Spid] [int] NULL,
	[Guid] [uniqueidentifier] NULL,
	[Only] [varchar](256) NULL,
	[LtnOnly] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderCheckMatBalance_Tmp](
	[Spid] [int] NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[MatGuid] [uniqueidentifier] NULL,
	[StoreGuid] [uniqueidentifier] NULL,
	[Qty] [float] NULL,
	[unit] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[DefStoreGuid] [uniqueidentifier] NULL,
	[DefCostGuid] [uniqueidentifier] NULL,
	[BillTypeGuid] [uniqueidentifier] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[ChangeBillType] [bit] NULL,
	[ChangeCurrency] [bit] NULL,
	[CheckStore] [bit] NULL,
	[CheckStoreRecipient] [bit] NULL,
	[RestraintMat] [bit] NULL,
	[Note] [varchar](256) NULL,
	[DefUnity] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderTypeGroup](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[GroupGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL,
	[CloseOrder] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Owner](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Nationality] [varchar](256) NULL,
	[LtnNationality] [varchar](256) NULL,
	[PersonalityNo] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[Phone] [varchar](256) NULL,
	[Mobile] [varchar](256) NULL,
	[Fax] [varchar](256) NULL,
	[BoxNo] [varchar](256) NULL,
	[EMail] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OwnerUnionFee](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Date] [date] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[CkFlat] [bit] NULL,
	[CkShop] [bit] NULL,
	[CkParking] [bit] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[CkMoveCreditCost] [bit] NULL,
	[CkMoveDebitCost] [bit] NULL,
	[Fee] [float] NULL,
	[RoundKind] [int] NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[ItemNote] [varchar](255) NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OwnerUnionFeeDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[parentGuid] [uniqueidentifier] NULL,
	[Kind] [int] NULL,
	[FlatGuid] [uniqueidentifier] NULL,
	[Area] [float] NULL,
	[Fee] [float] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[parking](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[NO] [varchar](256) NULL,
	[Judicial] [bit] NULL,
	[Ban] [bit] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[FloorNo] [int] NULL,
	[Area] [float] NULL,
	[unity] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[ParkingKind] [varchar](256) NULL,
	[Description] [varchar](256) NULL,
	[Overlooking] [varchar](256) NULL,
	[CostPrice] [float] NULL,
	[CostCurrencyGUID] [uniqueidentifier] NULL,
	[Rent] [float] NULL,
	[RentCurrencyGUID] [uniqueidentifier] NULL,
	[Sale] [float] NULL,
	[SaleCurrencyGUID] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[FlatOwner] [int] NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[Details] [varchar](256) NULL,
	[OfferState] [int] NULL,
	[OfferType] [int] NULL,
	[CustomerName] [varchar](256) NULL,
	[CustomerPhone] [varchar](256) NULL,
	[Restrained] [bit] NULL,
	[PurchaseDate] [date] NULL,
	[PayValue] [float] NULL,
	[LastContractGuid] [uniqueidentifier] NULL,
	[RestrainedUserGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_parking_NO_UNIQUE] UNIQUE NONCLUSTERED 
(
	[BuildingGuid] ASC,
	[NO] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ParkingContract](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Mark] [bit] NULL,
	[EditDate] [date] NULL,
	[DeliverDate] [date] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[ContractKind] [int] NULL,
	[IsAutoRenewal] [bit] NULL,
	[ContractNo] [varchar](256) NULL,
	[CustomerGuid] [uniqueidentifier] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[ParkingGuid] [uniqueidentifier] NULL,
	[Description] [varchar](255) NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[RentInfoGuid] [uniqueidentifier] NULL,
	[SalesManGuid] [uniqueidentifier] NULL,
	[FlatContractGuid] [uniqueidentifier] NULL,
	[FromDate] [date] NULL,
	[ToDate] [date] NULL,
	[Period] [int] NULL,
	[Rent] [float] NULL,
	[RentContractType] [int] NULL,
	[MonthlyValue] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[DiscountPercent] [float] NULL,
	[DiscountValue] [float] NULL,
	[DiscountAccountGuid] [uniqueidentifier] NULL,
	[PayType] [int] NULL,
	[Note] [varchar](8000) NULL,
	[Note2] [varchar](8000) NULL,
	[RevenueAccountGuid] [uniqueidentifier] NULL,
	[CustAccountGuid] [uniqueidentifier] NULL,
	[CommissionFromCustPercent] [float] NULL,
	[CommissionFromCustValue] [float] NULL,
	[AcCommissionFromCustGuid] [uniqueidentifier] NULL,
	[CommissionFromOwnerPercent] [float] NULL,
	[CommissionFromOwnerValue] [float] NULL,
	[AcCommissionFromOwnerGuid] [uniqueidentifier] NULL,
	[AcIncomNextYearGUID] [uniqueidentifier] NULL,
	[AcCommissionFromOwnerNote] [varchar](256) NULL,
	[AcCommissionFromCustNote] [varchar](256) NULL,
	[CommissionFromSalesManrPercent] [float] NULL,
	[CommissionFromSalesManValue] [float] NULL,
	[AcSalesManCommissionGuid] [uniqueidentifier] NULL,
	[AcCommissionExpenseGuid] [uniqueidentifier] NULL,
	[SalesManCommNote] [varchar](256) NULL,
	[OtherFee1] [float] NULL,
	[OtherFeeAccount1GUID] [uniqueidentifier] NULL,
	[OtherFee2] [float] NULL,
	[OtherFeeAccount2GUID] [uniqueidentifier] NULL,
	[OtherFee3] [float] NULL,
	[OtherFeeAccount3GUID] [uniqueidentifier] NULL,
	[OtherFee4] [float] NULL,
	[OtherFeeAccount4GUID] [uniqueidentifier] NULL,
	[OtherFee5] [float] NULL,
	[OtherFeeAccount5GUID] [uniqueidentifier] NULL,
	[ContractFinish] [bit] NULL,
	[ContractFinishDate] [date] NULL,
	[EditContractFinishDate] [date] NULL,
	[ResultingAmount] [float] NULL,
	[ResultingAmount2] [float] NULL,
	[ResultingNote] [varchar](256) NULL,
	[Fine] [float] NULL,
	[FineAccount] [uniqueidentifier] NULL,
	[FineNote] [varchar](256) NULL,
	[CreateResultingEntry] [bit] NULL,
	[InsuranceValue] [float] NULL,
	[InsuranceValueOld] [float] NULL,
	[ContractPrice] [float] NULL,
	[AccountContractPrice] [uniqueidentifier] NULL,
	[CertificatValue] [float] NULL,
	[AccountCertificatValue] [uniqueidentifier] NULL,
	[RentDuration] [varchar](256) NULL,
	[Rentype] [varchar](256) NULL,
	[TermsOfPayment] [varchar](256) NULL,
	[Step1Complete] [bit] NULL,
	[Step2Complete] [bit] NULL,
	[Step3Complete] [bit] NULL,
	[Step4Complete] [bit] NULL,
	[Step5Complete] [bit] NULL,
	[Certification] [varchar](256) NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[CardNo] [varchar](256) NULL,
	[CarNo] [varchar](256) NULL,
	[CarType] [varchar](256) NULL,
	[CarColor] [varchar](256) NULL,
	[Emirate] [varchar](256) NULL,
	[CreateContractEntry] [bit] NULL,
	[FineRevenueAccountGUID] [uniqueidentifier] NULL,
	[NewState] [int] NULL,
	[License1No] [varchar](256) NULL,
	[License2No] [varchar](256) NULL,
	[License3No] [varchar](256) NULL,
	[License1Date1] [date] NULL,
	[License2Date1] [date] NULL,
	[License3Date1] [date] NULL,
	[License1Date2] [date] NULL,
	[License2Date2] [date] NULL,
	[License3Date2] [date] NULL,
	[LtnRentDuration] [varchar](256) NULL,
	[LtnRentype] [varchar](256) NULL,
	[LtnTermsOfPayment] [varchar](256) NULL,
	[IsRounded] [bit] NULL,
	[Judicial] [bit] NULL,
	[IsReturnInsurance] [bit] NULL,
	[ReturnInsuranceDate] [date] NULL,
	[PrvContractGuid] [uniqueidentifier] NULL,
	[AddPercent] [float] NULL,
	[AddValue] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ParkingContractFee](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[EntryNumber] [int] NULL,
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[CreateEntry] [bit] NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ParkingContractReceiptNO](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[No] [varchar](256) NULL,
	[Date] [date] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ParkingWallet](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[ParkingGuid] [uniqueidentifier] NULL,
	[MainCost] [float] NULL,
	[Expense] [float] NULL,
	[BeginDate] [date] NULL,
	[SaleDate] [date] NULL,
	[SaleValue] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Partnerwallet](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[BeginDate] [date] NULL,
	[EndDate] [date] NULL,
	[RealWorkDay] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PathCustomPrint](
	[FormName] [varchar](256) NULL,
	[Path] [varchar](512) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Photos](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[TableGUID] [uniqueidentifier] NULL,
	[userGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Path] [varchar](255) NULL,
	[Tab] [varchar](255) NULL,
	[Desc] [varchar](255) NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pricing](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[RepNo] [varchar](255) NULL,
	[RepDate] [date] NULL,
	[RegNo] [varchar](255) NULL,
	[Attachment] [varchar](255) NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[OwnerName] [varchar](255) NULL,
	[IssueSide] [varchar](255) NULL,
	[DocNo] [varchar](255) NULL,
	[DocDate] [date] NULL,
	[Country] [varchar](255) NULL,
	[Region] [varchar](255) NULL,
	[City] [varchar](255) NULL,
	[Quarter] [varchar](255) NULL,
	[Street] [varchar](255) NULL,
	[DesignName] [varchar](255) NULL,
	[PieceNo] [varchar](255) NULL,
	[RealtyNote] [varchar](255) NULL,
	[RegionState] [varchar](255) NULL,
	[Building] [bit] NULL,
	[pubUtil1] [bit] NULL,
	[pubUtil2] [bit] NULL,
	[pubUtil3] [bit] NULL,
	[Service1] [bit] NULL,
	[Service2] [bit] NULL,
	[Service3] [bit] NULL,
	[Service4] [bit] NULL,
	[RegionNote] [varchar](255) NULL,
	[Area] [varchar](255) NULL,
	[AreaState1] [bit] NULL,
	[AreaState2] [bit] NULL,
	[AreaState3] [bit] NULL,
	[BuildSys] [varchar](255) NULL,
	[ParamBuild] [varchar](255) NULL,
	[RegionClass] [varchar](255) NULL,
	[Dimension1] [varchar](255) NULL,
	[Dimension2] [varchar](255) NULL,
	[Dimension3] [varchar](255) NULL,
	[Dimension4] [varchar](255) NULL,
	[Boundary1] [varchar](255) NULL,
	[Boundary2] [varchar](255) NULL,
	[Boundary3] [varchar](255) NULL,
	[Boundary4] [varchar](255) NULL,
	[LandState] [varchar](255) NULL,
	[DimensionNote] [varchar](255) NULL,
	[Coordinate] [varchar](255) NULL,
	[Resume] [varchar](500) NULL,
	[Merit] [varchar](500) NULL,
	[Drawback] [varchar](500) NULL,
	[ProjectEffect] [varchar](2500) NULL,
	[RealtyValue] [float] NULL,
	[CostValue] [float] NULL,
	[MeterPrice] [float] NULL,
	[CurrentLandPrice] [varchar](255) NULL,
	[PricingWay] [varchar](255) NULL,
	[PricingValue] [varchar](255) NULL,
	[MaxPrice] [varchar](255) NULL,
	[MinPrice] [varchar](255) NULL,
	[EstimationValue] [varchar](255) NULL,
	[EstimationNote] [varchar](500) NULL,
	[MapPath1] [varchar](255) NULL,
	[MapPath2] [varchar](255) NULL,
	[MapPath3] [varchar](255) NULL,
	[Note] [varchar](255) NULL,
	[CreateEntry] [bit] NULL,
	[EntryDate] [date] NULL,
	[EntryValue] [float] NULL,
	[EntryCurrencyGUID] [uniqueidentifier] NULL,
	[EntryCurrencyVal] [float] NULL,
	[DebitAccountGuid] [uniqueidentifier] NULL,
	[CreditAccountGuid] [uniqueidentifier] NULL,
	[DebitCostGuid] [uniqueidentifier] NULL,
	[CreditCostGuid] [uniqueidentifier] NULL,
	[EntryNote] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PricingDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Kind] [int] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[Note] [varchar](255) NULL,
	[Analysis] [varchar](255) NULL,
	[Value] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Progress_Tbl](
	[Spid] [int] NULL,
	[Msg] [varchar](255) NULL,
	[SubMsg] [varchar](255) NULL,
	[MaxPos] [int] NULL,
	[Pos] [int] NULL,
	[Time] [date] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectCost](
	[BuildingGuid] [uniqueidentifier] NOT NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[CostTotal] [float] NULL,
	[AreaTotal] [float] NULL,
	[Unity] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[CostGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[BuildingGuid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectCostDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[pRun](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Date] [date] NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QtyGroup](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[GroupGuid] [uniqueidentifier] NULL,
	[CalcQtyGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QueryDefaultValue](
	[UserGuid] [uniqueidentifier] NULL,
	[RepName] [varchar](256) NULL,
	[FormName] [varchar](256) NULL,
	[ComponentName] [varchar](256) NULL,
	[Value] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QueryFeature](
	[No] [int] IDENTITY(1,1) NOT NULL,
	[ID] [int] NULL,
	[Value] [varchar](800) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Realty_Detail_users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[IdCard] [int] NULL,
	[Permit] [varchar](25) NULL,
	[Str] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Realty_LogCard](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[UserGuid] [uniqueidentifier] NULL,
	[ComputerName] [varchar](50) NULL,
	[CardId] [int] NULL,
	[CardGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Opration] [varchar](100) NULL,
	[Note] [varchar](250) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Realty_Users](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[LoginName] [varchar](50) NULL,
	[Password] [varchar](50) NULL,
	[bAdmin] [bit] NULL,
	[UserSecLvl] [int] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [Realty_Users_LoginName_Primary_Users] UNIQUE NONCLUSTERED 
(
	[LoginName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RealtyMaintenanceContract](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[RealtyGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Percent] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RealtyRestrained](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[RestrainedCanceld] [bit] NULL,
	[CustomerGuid] [uniqueidentifier] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[FlatGuid] [uniqueidentifier] NULL,
	[ParkingNo] [uniqueidentifier] NULL,
	[VillaGuid] [uniqueidentifier] NULL,
	[LandGuid] [uniqueidentifier] NULL,
	[Shop] [uniqueidentifier] NULL,
	[RealtyType] [int] NULL,
	[EditDate] [date] NULL,
	[Date] [date] NULL,
	[EndDate] [date] NULL,
	[EndDateSpecific] [bit] NULL,
	[Note] [varchar](256) NULL,
	[Pay] [bit] NULL,
	[PayValue] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[Currencyval] [float] NULL,
	[PayType] [int] NULL,
	[DebitAccountGuid] [uniqueidentifier] NULL,
	[CreditAccountGuid] [uniqueidentifier] NULL,
	[CostDebitGuid] [uniqueidentifier] NULL,
	[CostCreditGuid] [uniqueidentifier] NULL,
	[CheckTypeGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReceiptOrder](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[mark] [bit] NULL,
	[Note] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReceiptOrderDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[Label] [varchar](255) NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Value] [float] NULL,
	[CashValue] [float] NULL,
	[checkValue] [float] NULL,
	[Note] [varchar](255) NULL,
	[IsReceipt] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReceiptOrderType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[EntryTypeGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReceiptOrderTypeDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Label] [varchar](255) NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[ArNote] [varchar](255) NULL,
	[EnNote] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReceiptOrderTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Mark] [bit] NULL,
	[MarkEdit] [bit] NULL,
	[MarkDel] [bit] NULL,
	[ShowMark] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reminder](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Subject] [varchar](256) NULL,
	[Date] [date] NULL,
	[RemindDate] [date] NULL,
	[Finished] [bit] NULL,
	[Mobile] [varchar](256) NULL,
	[Note] [varchar](800) NULL,
	[ForAllUser] [bit] NULL,
	[UserGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RentInfo](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Adjective] [varchar](256) NULL,
	[PassportNO] [varchar](256) NULL,
	[PassportExpireDate] [date] NULL,
	[WorkCardNo] [varchar](256) NULL,
	[Nationality] [varchar](256) NULL,
	[LtnNationality] [varchar](256) NULL,
	[Work] [varchar](256) NULL,
	[PersonalityNo] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[Phone] [varchar](256) NULL,
	[Mobile] [varchar](256) NULL,
	[Fax] [varchar](256) NULL,
	[BoxNo] [varchar](256) NULL,
	[EMail] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RepCheck](
	[ObjGuid] [uniqueidentifier] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[IdReport] [int] NULL,
	[date] [date] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RepCheckCount](
	[ObjGuid] [uniqueidentifier] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[IdReport] [int] NULL,
	[date] [date] NULL,
	[Count] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReportSort](
	[UserGuid] [uniqueidentifier] NULL,
	[ReportName] [varchar](256) NULL,
	[SortValue] [varchar](500) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RepSMS](
	[ObjGuid] [uniqueidentifier] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[IdReport] [int] NULL,
	[date] [date] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RepSMSCount](
	[ObjGuid] [uniqueidentifier] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[IdReport] [int] NULL,
	[date] [date] NULL,
	[Count] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Resource](
	[Spid] [int] NULL,
	[Guid] [uniqueidentifier] NULL,
	[Kind] [int] NULL,
	[Tag] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Salesman](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[WorkCardNo] [varchar](256) NULL,
	[Nationality] [varchar](256) NULL,
	[LtnNationality] [varchar](256) NULL,
	[PersonalityNo] [varchar](256) NULL,
	[PassportNo] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[Phone] [varchar](256) NULL,
	[Mobile] [varchar](256) NULL,
	[Fax] [varchar](256) NULL,
	[BoxNo] [varchar](256) NULL,
	[EMail] [varchar](256) NULL,
	[Commissionlimit] [float] NULL,
	[DiscountPercent] [float] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Secondary_Entry](
	[Guid] [uniqueidentifier] NOT NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[Number] [int] NOT NULL IDENTITY(1,1),
	[SecLvl] [int] NULL,
	[Mark] [bit] NULL,
	[Kind] [int] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Note] [varchar](256) NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[SalesManGuid] [uniqueidentifier] NULL,
	[ContractGuid] [uniqueidentifier] NULL,
	[CheckCreateEntry] [bit] NULL,
	[IsRounded] [bit] NULL,
	[ReceiptNo] [varchar](256) NULL,
	[Debit] [float] NULL,
	[Credit] [float] NULL,
	[Itemcount] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [Secondary_Entry_Unique_Number] UNIQUE NONCLUSTERED 
(
	[Number] ASC,
	[TypeGuid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Secondary_EntryDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AcGuid] [uniqueidentifier] NULL,
	[Debit] [float] NULL,
	[Credit] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[ObverseAcGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServicesContract](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[EditDate] [date] NULL,
	[Mark] [bit] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[ContractNo] [varchar](256) NULL,
	[CustomerGuid] [uniqueidentifier] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[FromDate] [date] NULL,
	[ToDate] [date] NULL,
	[Period] [int] NULL,
	[PeriodType] [int] NULL,
	[Rent] [float] NULL,
	[MonthlyValue] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[PayType] [int] NULL,
	[Note] [varchar](8000) NULL,
	[Note2] [varchar](8000) NULL,
	[Trademark] [varchar](256) NULL,
	[Purpose] [varchar](256) NULL,
	[Whereabouts] [varchar](256) NULL,
	[ExpenceAccountGUID] [uniqueidentifier] NULL,
	[CustAccountGuid] [uniqueidentifier] NULL,
	[CreateContractEntry] [bit] NULL,
	[ContractFinish] [bit] NULL,
	[ContractFinishDate] [date] NULL,
	[ResultingAmount] [float] NULL,
	[ResultingAmount2] [float] NULL,
	[RoundKind] [int] NULL,
	[ResultingNote] [varchar](256) NULL,
	[CreateResultingEntry] [bit] NULL,
	[RentDuration] [varchar](256) NULL,
	[Rentype] [varchar](256) NULL,
	[TermsOfPayment] [varchar](256) NULL,
	[DiscountPercent] [float] NULL,
	[DiscountValue] [float] NULL,
	[DiscountAccountGuid] [uniqueidentifier] NULL,
	[UserGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[FineExpenceAccountGUID] [uniqueidentifier] NULL,
	[NewState] [int] NULL,
	[OtherFee] [float] NULL,
	[OtherFeeAccountGUID] [uniqueidentifier] NULL,
	[License1No] [varchar](256) NULL,
	[License2No] [varchar](256) NULL,
	[License3No] [varchar](256) NULL,
	[License1Date1] [date] NULL,
	[License2Date1] [date] NULL,
	[License3Date1] [date] NULL,
	[License1Date2] [date] NULL,
	[License2Date2] [date] NULL,
	[License3Date2] [date] NULL,
	[Ltnwhereabouts] [varchar](256) NULL,
	[LtnPurpose] [varchar](256) NULL,
	[LtnRentDuration] [varchar](256) NULL,
	[LtnRentype] [varchar](256) NULL,
	[LtnTermsOfPayment] [varchar](256) NULL,
	[IsRounded] [bit] NULL,
	[CountOldContract] [int] NULL,
	[AcquittancePrinted] [bit] NULL,
	[AcquittancePrintDate] [date] NULL,
	[AcquittancePrintedByGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServicesContractCachPayment](
	[ContractGuid] [uniqueidentifier] NULL,
	[EntryGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServicesContractDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[TypeName] [varchar](255) NULL,
	[Count] [float] NULL,
	[Model] [varchar](255) NULL,
	[WithChangePiece] [bit] NULL,
	[visitCount] [int] NULL,
	[VisitKind] [int] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServicesContractType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[ltnName] [varchar](256) NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[ExpenceAccountGUID] [uniqueidentifier] NULL,
	[DiscountAccountGUID] [uniqueidentifier] NULL,
	[Rentcondition] [varchar](2048) NULL,
	[DefPrintPath] [varchar](256) NULL,
	[CreateEntry] [bit] NULL,
	[AutoCreateEntry] [bit] NULL,
	[AutoPostedEntry] [bit] NULL,
	[EntryDate] [int] NULL,
	[MoveCostWithExpenceDebit] [bit] NULL,
	[MoveCostWithExpenceCredit] [bit] NULL,
	[MoveCostWithDiscountDebit] [bit] NULL,
	[MoveCostWithDiscountCredit] [bit] NULL,
	[DefPrintReceipt] [varchar](256) NULL,
	[DefPrintLogPath] [varchar](256) NULL,
	[DefPrintacquittance] [varchar](256) NULL,
	[FirstPayNote] [varchar](255) NULL,
	[FirstPayNoteLtn] [varchar](255) NULL,
	[ContractNote] [varchar](255) NULL,
	[ContractNoteLtn] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServicesContractTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[ContractTypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Mark] [bit] NULL,
	[MarkEdit] [bit] NULL,
	[MarkDel] [bit] NULL,
	[ShowMark] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL,
	[Field7] [bit] NULL,
	[Field8] [bit] NULL,
	[Field9] [bit] NULL,
	[Field10] [bit] NULL,
	[Field11] [bit] NULL,
	[Field12] [bit] NULL,
	[Field13] [bit] NULL,
	[Field14] [bit] NULL,
	[Field15] [bit] NULL,
	[Field16] [bit] NULL,
	[Field17] [bit] NULL,
	[Field18] [bit] NULL,
	[Field19] [bit] NULL,
	[Field20] [bit] NULL,
	[Field21] [bit] NULL,
	[MaxDiscount] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shop](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[NO] [varchar](256) NULL,
	[Judicial] [bit] NULL,
	[Ban] [bit] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[Area] [float] NULL,
	[Unity] [varchar](256) NULL,
	[ShopKind] [varchar](256) NULL,
	[Description] [varchar](256) NULL,
	[Overlooking] [varchar](256) NULL,
	[UnifiedNum] [varchar](256) NULL,
	[ManservantRoom] [int] NULL,
	[DriverRoom] [int] NULL,
	[CostPrice] [float] NULL,
	[CostCurrencyGUID] [uniqueidentifier] NULL,
	[Rent] [float] NULL,
	[RentCurrencyGUID] [uniqueidentifier] NULL,
	[Sale] [float] NULL,
	[SaleCurrencyGUID] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[FlatOwner] [int] NULL,
	[CustGuid] [uniqueidentifier] NULL,
	[Details] [varchar](256) NULL,
	[OfferState] [int] NULL,
	[OfferType] [int] NULL,
	[Restrained] [bit] NULL,
	[RestrainedUserGuid] [uniqueidentifier] NULL,
	[WaterCounter] [varchar](256) NULL,
	[ElectricityCounter] [varchar](256) NULL,
	[LtnShopKind] [varchar](256) NULL,
	[LtnDescription] [varchar](256) NULL,
	[LtnOverlooking] [varchar](256) NULL,
	[Class] [varchar](256) NULL,
	[BondType] [varchar](256) NULL,
	[BondNo] [varchar](256) NULL,
	[BondDate] [date] NULL,
	[License1] [varchar](256) NULL,
	[License2] [varchar](256) NULL,
	[LastContractGUID] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_ShopBuildingGuid_NO_UNIQUE] UNIQUE NONCLUSTERED 
(
	[BuildingGuid] ASC,
	[NO] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopAssets](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AssetsGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopOffer](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[NO] [varchar](256) NULL,
	[Building] [varchar](256) NULL,
	[Customer] [varchar](256) NULL,
	[Area] [float] NULL,
	[Unity] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[ShopKind] [varchar](256) NULL,
	[Description] [varchar](256) NULL,
	[Overlooking] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[Details] [varchar](256) NULL,
	[WaterCounter] [varchar](256) NULL,
	[ElectricityCounter] [varchar](256) NULL,
	[OfferKind] [int] NULL,
	[OfferValue] [float] NULL,
	[Delegated] [varchar](256) NULL,
	[CustPhone] [varchar](256) NULL,
	[CustMobile] [varchar](256) NULL,
	[MaxOfferValue] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopWallet](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[BuildingGuid] [uniqueidentifier] NULL,
	[ShopGuid] [uniqueidentifier] NULL,
	[MainCost] [float] NULL,
	[Expense] [float] NULL,
	[BeginDate] [date] NULL,
	[SaleDate] [date] NULL,
	[SaleValue] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SMSInfo](
	[Guid] [uniqueidentifier] NOT NULL,
	[ServerName] [varchar](256) NULL,
	[Unicode] [int] NULL,
	[ArLink] [varchar](1000) NULL,
	[EnLink] [varchar](1000) NULL,
	[BalanceLink] [varchar](1000) NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SMSInfoDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[Result] [varchar](256) NULL,
	[ArNote] [varchar](256) NULL,
	[EnNote] [varchar](256) NULL,
	[IsSend] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SMSLog](
	[UserGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[Host_Name] [varchar](256) NULL,
	[Phone] [varchar](256) NULL,
	[Msg] [varchar](256) NULL,
	[Result] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SMSSetup](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[Tag] [int] NULL,
	[AutoSend] [bit] NULL,
	[immediateSend] [bit] NULL,
	[Day] [int] NULL,
	[ArMsg] [varchar](500) NULL,
	[EnMsg] [varchar](500) NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Store](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[warehouseman] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[AcFinalGUID] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StrSource](
	[Ar] [varchar](256) NULL,
	[En] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TableDescription](
	[Number] [int] IDENTITY(1,1) NOT NULL,
	[TblName] [varchar](256) NULL,
	[ArName] [varchar](256) NULL,
	[EnName] [varchar](256) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TableNumber](
	[TableName] [varchar](50) NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[LastNumber] [int] NULL,
	[RecCount] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblLangauge](
	[Spid] [int] NULL,
	[Lang] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblShortCut](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[ItemName] [varchar](256) NULL,
	[ItemIndex] [int] NULL,
	[Kind] [int] NULL,
	[Text] [varchar](4000) NULL,
	[ShortCut] [varchar](30) NULL,
	[UserGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblUpdateFlatSpecifications](
	[NO] [varchar](255) NULL,
	[NewNo] [varchar](255) NULL,
	[FloorNo] [varchar](255) NULL,
	[FlatKind] [varchar](255) NULL,
	[ApartmentType] [varchar](255) NULL,
	[Overlooking] [varchar](255) NULL,
	[ltnFlatKind] [varchar](255) NULL,
	[ltnApartmentType] [varchar](255) NULL,
	[ltnOverlooking] [varchar](255) NULL,
	[Class] [varchar](255) NULL,
	[Area] [float] NULL,
	[unity] [varchar](255) NULL,
	[Note] [varchar](255) NULL,
	[UnifiedNum] [varchar](256) NULL,
	[ManservantRoom] [int] NULL,
	[DriverRoom] [int] NULL,
	[CustOwnerGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblUpdateParkingSpecifications](
	[NO] [varchar](255) NULL,
	[NewNo] [varchar](255) NULL,
	[ParkingKind] [varchar](255) NULL,
	[Description] [varchar](255) NULL,
	[Overlooking] [varchar](255) NULL,
	[FloorNo] [int] NULL,
	[Area] [float] NULL,
	[unity] [varchar](255) NULL,
	[Note] [varchar](255) NULL,
	[CustGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblUpdateShopSpecifications](
	[NO] [varchar](255) NULL,
	[NewNo] [varchar](255) NULL,
	[ShopKind] [varchar](255) NULL,
	[Description] [varchar](255) NULL,
	[Overlooking] [varchar](255) NULL,
	[ltnShopKind] [varchar](255) NULL,
	[LtnDescription] [varchar](255) NULL,
	[ltnOverlooking] [varchar](255) NULL,
	[Class] [varchar](255) NULL,
	[Area] [float] NULL,
	[unity] [varchar](255) NULL,
	[Note] [varchar](255) NULL,
	[UnifiedNum] [varchar](256) NULL,
	[ManservantRoom] [int] NULL,
	[DriverRoom] [int] NULL,
	[CustGuid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Term](
	[Old] [varchar](256) NULL,
	[New] [varchar](256) NULL,
	[Wind] [varchar](256) NULL,
 CONSTRAINT [Uk_OldTerm] UNIQUE NONCLUSTERED 
(
	[Old] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[testing](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[MatGuid] [uniqueidentifier] NULL,
	[Qty] [float] NULL,
	[Qty2] [float] NULL,
	[Qty3] [float] NULL,
	[Price] [float] NULL,
	[TotalPrice] [float] NULL,
	[Bonus] [float] NULL,
	[StoreGuid] [uniqueidentifier] NULL,
	[DiscountPercent] [float] NULL,
	[Discount] [float] NULL,
	[ExtraPercent] [float] NULL,
	[Extra] [float] NULL,
	[Note] [varchar](256) NULL,
	[ProductDate] [date] NULL,
	[ExpireDate] [date] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Class] [varchar](256) NULL,
	[Length] [float] NULL,
	[width] [float] NULL,
	[height] [float] NULL,
	[Count] [float] NULL,
	[unityFact2] [float] NULL,
	[unityFact3] [float] NULL,
	[unityfix2] [bit] NULL,
	[unityfix3] [bit] NULL,
	[ItemUnit] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TmpCSV](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[txt] [varchar](8000) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Trace](
	[ParentGuid] [uniqueidentifier] NULL,
	[Guid] [uniqueidentifier] NOT NULL,
	[Date] [date] NULL,
	[userGuid] [uniqueidentifier] NULL,
	[HostName] [varchar](256) NULL,
	[ParentTbl] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TraceDetail](
	[ParentGuid] [uniqueidentifier] NULL,
	[Caption] [varchar](256) NULL,
	[Old] [varchar](500) NULL,
	[New] [varchar](500) NULL,
	[Tbl] [varchar](50) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Trans](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[TypeGuid] [uniqueidentifier] NULL,
	[Date] [date] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[PayType] [int] NULL,
	[StoreOutGuid] [uniqueidentifier] NULL,
	[AcMatOutGuid] [uniqueidentifier] NULL,
	[TmpAcOutGuid] [uniqueidentifier] NULL,
	[CostOutGuid] [uniqueidentifier] NULL,
	[StoreInGuid] [uniqueidentifier] NULL,
	[AcMatInGuid] [uniqueidentifier] NULL,
	[TmpAcInGuid] [uniqueidentifier] NULL,
	[CostInGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[Class] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[EntryOutGuid] [uniqueidentifier] NULL,
	[EntryInGuid] [uniqueidentifier] NULL,
	[EntryOutNumber] [int] NULL,
	[EntryInNumber] [int] NULL,
	[CheckCreateEntry] [bit] NULL,
	[IsPosted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransDetail](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[MatGuid] [uniqueidentifier] NULL,
	[Qty] [float] NULL,
	[Qty2] [float] NULL,
	[Qty3] [float] NULL,
	[Price] [float] NULL,
	[TotalPrice] [float] NULL,
	[Bonus] [float] NULL,
	[DiscountPercent] [float] NULL,
	[Discount] [float] NULL,
	[ExtraPercent] [float] NULL,
	[Extra] [float] NULL,
	[Note] [varchar](256) NULL,
	[ProductDate] [date] NULL,
	[ExpireDate] [date] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[Class] [varchar](256) NULL,
	[Length] [float] NULL,
	[width] [float] NULL,
	[height] [float] NULL,
	[Count] [float] NULL,
	[ItemUnit] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransDiscount](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[ParentGuid] [uniqueidentifier] NULL,
	[AccountGuid] [uniqueidentifier] NULL,
	[Discount] [float] NULL,
	[Extra] [float] NULL,
	[CurrencyGuid] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[obverseAccountGuid] [uniqueidentifier] NULL,
	[Note] [varchar](256) NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransType](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [varchar](256) NULL,
	[Name] [varchar](256) NULL,
	[LtnName] [varchar](256) NULL,
	[Menu] [varchar](256) NULL,
	[LtnMenu] [varchar](256) NULL,
	[ShortCut] [varchar](256) NULL,
	[DefPrintPath] [varchar](256) NULL,
	[Note] [varchar](256) NULL,
	[Color1] [float] NULL,
	[Color2] [float] NULL,
	[DefCostinGuid] [uniqueidentifier] NULL,
	[DefStoreInGuid] [uniqueidentifier] NULL,
	[DefCostOutGuid] [uniqueidentifier] NULL,
	[DefStoreOutGuid] [uniqueidentifier] NULL,
	[PostToStores] [bit] NULL,
	[PostToStoresAuto] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransTypeField](
	[TransTypeGuid] [uniqueidentifier] NULL,
	[FieldName] [varchar](256) NULL,
	[Visible] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransTypePrivilege](
	[UserGuid] [uniqueidentifier] NULL,
	[TransTypeGuid] [uniqueidentifier] NULL,
	[Open] [bit] NULL,
	[Add] [bit] NULL,
	[Edit] [bit] NULL,
	[Del] [bit] NULL,
	[Print] [bit] NULL,
	[Design] [bit] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tree_ParentList](
	[Spid] [int] NULL,
	[Id] [int] NULL,
	[Guid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ucsTbl](
	[Char] [varchar](2) NULL,
	[ucs] [varchar](4) NULL,
	[UCS2] [varchar](8) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ucsTbl2](
	[Char] [varchar](2) NULL,
	[ucs] [varchar](10) NULL,
	[unicode] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Villa](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Ban] [bit] NULL,
	[WaterCounter] [int] NULL,
	[ElectricityCounter] [float] NULL,
	[ComplexName] [varchar](256) NULL,
	[Emirate] [varchar](256) NULL,
	[Area] [varchar](256) NULL,
	[unity] [varchar](256) NULL,
	[Street] [varchar](256) NULL,
	[Suburb] [varchar](256) NULL,
	[PieceNo] [varchar](256) NULL,
	[BasinNo] [varchar](256) NULL,
	[VillaNo] [varchar](256) NULL,
	[DocType] [varchar](256) NULL,
	[DocNo] [varchar](256) NULL,
	[DocDate] [date] NULL,
	[VillaAccountGuid] [uniqueidentifier] NULL,
	[CashAccountGuid] [uniqueidentifier] NULL,
	[InsuranceAccountGuid] [uniqueidentifier] NULL,
	[AccountCommIncomeGuid] [uniqueidentifier] NULL,
	[CuOwnerGuid] [uniqueidentifier] NULL,
	[CostGuid] [uniqueidentifier] NULL,
	[AccountBankVillaGuid] [uniqueidentifier] NULL,
	[RentInfoGuid] [uniqueidentifier] NULL,
	[BranchGuid] [uniqueidentifier] NULL,
	[FloorCount] [int] NULL,
	[BalconyCount] [int] NULL,
	[RoomCount] [int] NULL,
	[OtherRoomCount] [int] NULL,
	[ServiceRoomCount] [int] NULL,
	[BathroomCount] [int] NULL,
	[StairsInternal] [bit] NULL,
	[RoomState] [varchar](256) NULL,
	[LandArea] [varchar](256) NULL,
	[LandAreaBuilding] [varchar](256) NULL,
	[FinishingState] [varchar](256) NULL,
	[SecurityType] [varchar](256) NULL,
	[SecuritySystem] [bit] NULL,
	[wall] [varchar](256) NULL,
	[wallState] [varchar](256) NULL,
	[lightingCount] [int] NULL,
	[ParkingCount] [int] NULL,
	[ParkingArea] [varchar](256) NULL,
	[ParkingShaded] [bit] NULL,
	[PoolCount] [int] NULL,
	[PoolState] [varchar](256) NULL,
	[PoolSystem] [varchar](256) NULL,
	[PlaygroundCount] [int] NULL,
	[PlaygroundArea] [varchar](256) NULL,
	[GardenCount] [int] NULL,
	[GardenArea] [varchar](256) NULL,
	[GardenState] [varchar](256) NULL,
	[OfferType] [int] NULL,
	[OfferState] [int] NULL,
	[Restrained] [bit] NULL,
	[RestrainedUserGuid] [uniqueidentifier] NULL,
	[CustomerName] [varchar](256) NULL,
	[CustomerPhone] [varchar](256) NULL,
	[Details] [varchar](512) NULL,
	[LtnArea] [varchar](256) NULL,
	[LtnEmirate] [varchar](256) NULL,
	[LtnSuburb] [varchar](256) NULL,
	[LtnStreet] [varchar](256) NULL,
	[LtnDocType] [varchar](256) NULL,
	[VillaOwner] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VillaAssets](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[AssetsGuid] [uniqueidentifier] NULL,
	[Value] [float] NULL,
	[Note] [varchar](255) NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VillaOffer](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[WaterCounter] [int] NULL,
	[ElectricityCounter] [float] NULL,
	[ComplexName] [varchar](256) NULL,
	[Emirate] [varchar](256) NULL,
	[Area] [varchar](256) NULL,
	[Street] [varchar](256) NULL,
	[Suburb] [varchar](256) NULL,
	[PieceNo] [varchar](256) NULL,
	[BasinNo] [varchar](256) NULL,
	[VillaNo] [varchar](256) NULL,
	[DocType] [varchar](256) NULL,
	[DocNo] [varchar](256) NULL,
	[DocDate] [date] NULL,
	[Customer] [varchar](256) NULL,
	[Address] [varchar](256) NULL,
	[OfferKind] [int] NULL,
	[OfferValue] [float] NULL,
	[FloorCount] [int] NULL,
	[BalconyCount] [int] NULL,
	[RoomCount] [int] NULL,
	[OtherRoomCount] [int] NULL,
	[ServiceRoomCount] [int] NULL,
	[BathroomCount] [int] NULL,
	[StairsInternal] [bit] NULL,
	[RoomState] [varchar](256) NULL,
	[LandArea] [varchar](256) NULL,
	[LandAreaBuilding] [varchar](256) NULL,
	[FinishingState] [varchar](256) NULL,
	[SecurityType] [varchar](256) NULL,
	[SecuritySystem] [bit] NULL,
	[wall] [varchar](256) NULL,
	[wallState] [varchar](256) NULL,
	[lightingCount] [int] NULL,
	[ParkingCount] [int] NULL,
	[ParkingArea] [varchar](256) NULL,
	[ParkingShaded] [bit] NULL,
	[PoolCount] [int] NULL,
	[PoolState] [varchar](256) NULL,
	[PoolSystem] [varchar](256) NULL,
	[PlaygroundCount] [int] NULL,
	[PlaygroundArea] [varchar](256) NULL,
	[GardenCount] [int] NULL,
	[GardenArea] [varchar](256) NULL,
	[GardenState] [varchar](256) NULL,
	[Details] [varchar](512) NULL,
	[Delegated] [varchar](256) NULL,
	[CustPhone] [varchar](256) NULL,
	[CustMobile] [varchar](256) NULL,
	[MaxOfferValue] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Villawallet](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[ParentGuid] [uniqueidentifier] NULL,
	[VillaGuid] [uniqueidentifier] NULL,
	[MainCost] [float] NULL,
	[Expense] [float] NULL,
	[BeginDate] [date] NULL,
	[SaleDate] [date] NULL,
	[SaleValue] [float] NULL
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[wallet](
	[Number] [int] NOT NULL IDENTITY(1,1),
	[Guid] [uniqueidentifier] NOT NULL,
	[SecLvl] [int] NULL,
	[Code] [nvarchar](256) NULL,
	[Name] [nvarchar](256) NULL,
	[LtnName] [nvarchar](256) NULL,
	[CurrencyGUID] [uniqueidentifier] NULL,
	[CurrencyVal] [float] NULL,
	[Note] [nvarchar](256) NULL,
	[BranchGuid] [uniqueidentifier] NULL,
PRIMARY KEY CLUSTERED 
(
	[Guid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Account] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[AccountConformity] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Apartment] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Apartment] ADD  DEFAULT ('') FOR [CustomerName]
GO
ALTER TABLE [dbo].[Apartment] ADD  DEFAULT ('') FOR [CustomerPhone]
GO
ALTER TABLE [dbo].[ApartmentOffer] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[AppReport] ADD  DEFAULT (getdate()) FOR [date]
GO
ALTER TABLE [dbo].[AppReport] ADD  DEFAULT (host_name()) FOR [HostName]
GO
ALTER TABLE [dbo].[arv_Filter] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Assets] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[Assets] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[AssetsArea] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[AssetsArea] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[AssetsChangeArea] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[AssetsChangeArea] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[AssetsDepreciation] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[AssetsDepreciation] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[AssetsDepreciation] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[AssetsGroup] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[AssetsGroup] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[AssetsOperation] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[AssetsOperation] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[AssetsOperation] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[Bill] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BillDetail] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BillDiscount] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BillOrder] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BillOrderDetail] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BillOrderRecipient] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BillType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Branch] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[Branch] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BrowsCard] ADD  DEFAULT ('') FOR [ComputerName]
GO
ALTER TABLE [dbo].[BrowsCard] ADD  DEFAULT ((0)) FOR [CheckRefrech]
GO
ALTER TABLE [dbo].[Building] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BuildingAssets] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[BuildingGuard] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BuildingOffer] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BuildingPayType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[BuildingRecElecCounter] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[CalcQty] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ChangeCurrencyRate] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Checks] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Checks] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[ChecksCollection] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[ChecksCollection] ADD  DEFAULT ((1)) FOR [OperationCreateEntry]
GO
ALTER TABLE [dbo].[ChecksCollection] ADD  DEFAULT ((1)) FOR [ReturnCreateEntry]
GO
ALTER TABLE [dbo].[ChecksCollection] ADD  DEFAULT ((1)) FOR [CommCreateEntry]
GO
ALTER TABLE [dbo].[ChecksPartialCollection] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ChecksPartialCollection] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[CheckType] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[CheckType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[CheckType] ADD  DEFAULT ('') FOR [Menu]
GO
ALTER TABLE [dbo].[Complaint] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[Complaint] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ContractFlatAssets] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[ContractLandAssets] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[ContractType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ContractWorkFlow] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[ContractWorkFlow] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Cost] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Currency] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[CurrentUsers] ADD  DEFAULT (@@spid) FOR [Spid]
GO
ALTER TABLE [dbo].[Customer] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Customer] ADD  DEFAULT ((0)) FOR [CardKind]
GO
ALTER TABLE [dbo].[Customer] ADD  DEFAULT ((0)) FOR [CustKind]
GO
ALTER TABLE [dbo].[DEntry] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[DEntry] ADD  DEFAULT ((1)) FOR [IsVisible]
GO
ALTER TABLE [dbo].[DMD_const] ADD  DEFAULT ('') FOR [VName]
GO
ALTER TABLE [dbo].[DMD_const] ADD  DEFAULT ('') FOR [Value]
GO
ALTER TABLE [dbo].[Earth] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ElectricityBill] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ElectricityType] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[ElectricityType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[EntryDateType] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[EntryDateType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[EntryType] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[EntryType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ExternalTools] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[FlatAssets] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[FlatContractFee] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[FlatContractReceiptNO] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[FlatContractReceiptNO] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[HEntry] ADD  DEFAULT ((0)) FOR [ParentKind]
GO
ALTER TABLE [dbo].[HEntry] ADD  DEFAULT ((0)) FOR [IsPosted]
GO
ALTER TABLE [dbo].[IncAccount] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[IncomeSaved] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[IncomeSaved] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[IncomeSaved] ADD  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[LandContract] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[LandContract] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[LandContractFee] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[LandContractReceiptNO] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[LandContractReceiptNO] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[LandOffer] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Lawsuit] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[Lawsuit] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[LawsuitExpense] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[LawsuitExpense] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[LawsuitExpense] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[LawsuitState] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[LawsuitState] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[LeaseApartment] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[LeaseApartment] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[LinkCe] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ListOrderTypeGroups] ADD  DEFAULT (@@spid) FOR [Spid]
GO
ALTER TABLE [dbo].[LockCard] ADD  DEFAULT ('') FOR [ComputerName]
GO
ALTER TABLE [dbo].[LogFile] ADD  DEFAULT ('') FOR [Username]
GO
ALTER TABLE [dbo].[LogFile] ADD  DEFAULT ('') FOR [ComputerName]
GO
ALTER TABLE [dbo].[LogFile] ADD  DEFAULT ((0)) FOR [CardId]
GO
ALTER TABLE [dbo].[LogFile] ADD  DEFAULT (getdate()) FOR [ODate]
GO
ALTER TABLE [dbo].[LogFile] ADD  DEFAULT ('') FOR [Opration]
GO
ALTER TABLE [dbo].[LogFile] ADD  DEFAULT ('') FOR [Note]
GO
ALTER TABLE [dbo].[MaintenanceContract] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[MaintenanceContract] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[MaintenanceContractType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[MaintenanceContractVisit] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[MaintenanceItem] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[MaintenanceOrder] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[MaintenanceOrder] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[MaintenanceWorker] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[MaintenanceWorker] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[MapsConfig] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[MapsObject] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Mat] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[MatGroup] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[MsgTbl] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[MsgTbl] ADD  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[OfferPrice] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[OfferPrice] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[OfferPrice] ADD  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[OnlyCheck] ADD  DEFAULT (@@spid) FOR [Spid]
GO
ALTER TABLE [dbo].[OrderType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Owner] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[OwnerUnionFee] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[FlatBuildingDetails] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[parking] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[parking] ADD  DEFAULT ('') FOR [CustomerName]
GO
ALTER TABLE [dbo].[parking] ADD  DEFAULT ('') FOR [CustomerPhone]
GO
ALTER TABLE [dbo].[ParkingContract] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ParkingContract] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[ParkingContractFee] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ParkingContractReceiptNO] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[ParkingContractReceiptNO] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Photos] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Pricing] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[Pricing] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[PricingDetail] ADD  DEFAULT ((-1)) FOR [Number]
GO
ALTER TABLE [dbo].[Progress_Tbl] ADD  DEFAULT (@@spid) FOR [Spid]
GO
ALTER TABLE [dbo].[Progress_Tbl] ADD  DEFAULT (getdate()) FOR [Time]
GO
ALTER TABLE [dbo].[ProjectCostDetail] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[pRun] ADD  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[QtyGroup] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Realty_Detail_users] ADD  DEFAULT ((-1)) FOR [Number]
GO
ALTER TABLE [dbo].[Realty_Detail_users] ADD  DEFAULT ((0)) FOR [IdCard]
GO
ALTER TABLE [dbo].[Realty_LogCard] ADD  DEFAULT ('') FOR [ComputerName]
GO
ALTER TABLE [dbo].[Realty_LogCard] ADD  DEFAULT ((0)) FOR [CardId]
GO
ALTER TABLE [dbo].[Realty_LogCard] ADD  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Realty_LogCard] ADD  DEFAULT ('') FOR [Opration]
GO
ALTER TABLE [dbo].[Realty_LogCard] ADD  DEFAULT ('') FOR [Note]
GO
ALTER TABLE [dbo].[Realty_Users] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[Realty_Users] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Realty_Users] ADD  DEFAULT ('') FOR [Password]
GO
ALTER TABLE [dbo].[Realty_Users] ADD  DEFAULT ((0)) FOR [bAdmin]
GO
ALTER TABLE [dbo].[RealtyRestrained] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ReceiptOrder] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[ReceiptOrder] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ReceiptOrderDetail] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[ReceiptOrderDetail] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ReceiptOrderType] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[ReceiptOrderType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ReceiptOrderTypeDetail] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[Reminder] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Reminder] ADD  DEFAULT ((0)) FOR [Finished]
GO
ALTER TABLE [dbo].[RentInfo] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Resource] ADD  DEFAULT (@@spid) FOR [Spid]
GO
ALTER TABLE [dbo].[Resource] ADD  DEFAULT ((0)) FOR [Kind]
GO
ALTER TABLE [dbo].[Resource] ADD  DEFAULT ((0)) FOR [Tag]
GO
ALTER TABLE [dbo].[Salesman] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Secondary_Entry] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[ServicesContract] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ServicesContract] ADD  DEFAULT ((0)) FOR [IsRounded]
GO
ALTER TABLE [dbo].[ServicesContractType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Shop] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[ShopAssets] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[ShopOffer] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[SMSInfo] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[SMSLog] ADD  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[SMSLog] ADD  DEFAULT (host_name()) FOR [Host_Name]
GO
ALTER TABLE [dbo].[SMSSetup] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Store] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[TblShortCut] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[testing] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Trace] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Trans] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[TransDetail] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[TransDiscount] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[TransType] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[Tree_ParentList] ADD  DEFAULT (@@spid) FOR [Spid]
GO
ALTER TABLE [dbo].[Villa] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[Villa] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[VillaAssets] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[VillaOffer] ADD  DEFAULT ((0)) FOR [Number]
GO
ALTER TABLE [dbo].[VillaOffer] ADD  DEFAULT (newid()) FOR [Guid]
GO
ALTER TABLE [dbo].[wallet] ADD  DEFAULT (newid()) FOR [Guid]
GO