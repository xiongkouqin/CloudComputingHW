(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7aSx":function(t,e,a){"use strict";var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.getAAIRedirectionURL=e.generateRedirectPathWithoutDeepLink=e.formatEndpointURL=e.findTripGtmTag=e.findGtmTag=e.findCarrierGtmTag=e.fetchCode=e.dropPaxToSnap=e.createCookie=e.constructPassengerData=e.constructLocalStorageObject=e.changeDateFormat=void 0,e.getCookie=_,e.substituteValues=e.isKiwiStation=e.isCity=e.getSNAPRedirection=e.getRedirectionURL=e.getOperatingAirline=e.getListingAppQueryParameter=e.getEndpointURL=void 0;var n=r(a("lSNA")),i=r(a("HASD")),o=a("b/SL"),c=a("H/iq"),l=a("9LV8");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){(0,n.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e.getEndpointURL=function(t,e){var a=t.find((function(t){return t.id===e}));return a?a.endpointUrl:null};e.formatEndpointURL=function(t,e,a){var r=l.ENVIRONMENT_URL[e],n=a||l.SUB_VALUE;return t.replace("{gcs_url}",r.GCS_URL).replace("{static_url}",r.STATIC_URL).replace("{feature_flag_env}",r.FEATURE_FLAG_ENV).replace("{kong_url}","PRODUCTION"===e&&i.default.isChinaDomainName()?r.KONG_URL_CN:r.KONG_URL).replace("{funnel_control_url}",r.FUNNEL_CONTROL_URL.replace("{domain}",n))};e.getOperatingAirline=function(t,e,a){var r=l.OPERATING_AIRLINE.KEY,n=l.OPERATING_AIRLINE.PROVIDER;if(a)return function(t,e){return t&&t.provider?t.provider:t.StationType===l.FILTER_TYPE.CITY_KEY&&t.Stations?(0,c.getProviderForCitySearch)(t.Stations,e):t.Provider||e}(e,l.AIRLINES.AAB);if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==e[n]){if(e[n]===l.AIRLINES.AAI)return l.AIRLINES.AAI;if(e[n]===l.AIRLINES.AAB)return l.AIRLINES.AAB;if(e[n]===l.AIRLINES.FLYBEYOND)return l.AIRLINES.FLYBEYOND}else{if((!Object.prototype.hasOwnProperty.call(t,r)||void 0===t[r])&&(!Object.prototype.hasOwnProperty.call(e,r)||void 0===e[r]))return l.AIRLINES.AAB;if(t[r]&&e[r])return l.AIRLINES.AAB;if(!t[r]||!e[r])return l.AIRLINES.FLYBEYOND}};var A=function(t,e,a,r,n,i,c,s,u,A){var T={};return T.origin=t.StationCode,T.destination=e.StationCode,T.departDate=(0,o.format)(a.departureDate,l.DATE_FORMAT.LISTING_DATE_FORMAT),r.toUpperCase()===l.TRIP_TYPES.RETURN&&(T.returnDate=(0,o.format)(a.returnDate,l.DATE_FORMAT.LISTING_DATE_FORMAT)),T.adult=n.adult,T.child=n.child,T.infant=n.infant,T.tripType=r.toUpperCase(),T.locale=c,T.currency=s.toUpperCase(),u&&u.travelClass&&(T.cabinClass=u.travelClass),i&&i.length>0&&(T.promoCode=i),A&&A.length>0&&(T.custom1=A),Object.keys(T).map((function(t){return"".concat(t,"=").concat(T[t])})).join("&")};e.getListingAppQueryParameter=A;e.getAAIRedirectionURL=function(t,e,a,r,n,i,c,s){var u={"{origin}":t.StationCode,"{destination}":e.StationCode,"{departureDate}":(0,o.format)(a.departureDate,l.DATE_FORMAT.AA_DATE_FORMAT),"{returnDate}":"R"===r.toUpperCase()?(0,o.format)(a.returnDate,l.DATE_FORMAT.AA_DATE_FORMAT):"N","{adult}":n.adult,"{child}":n.child,"{infant}":n.infant,"{tripType}":"R"===r.toUpperCase()?"R":"O","{promoCode}":i&&i.length>0?i:"N","{currency}":c.toUpperCase(),"{sortType}":"ST"},A=Object.keys(u).map((function(t){return u[t]})).join("/");return l.ENVIRONMENT_URL[s].AAI_BASE_URL+A};e.getRedirectionURL=function(t,e,a,r,n,i,o,c,s,u,T){return"".concat(l.ENVIRONMENT_URL[o].LISTING_APP_URL,"?").concat(A(t,e,a,r,n,i,c,s,u,T))};var T=function(t,e){return t.replace(/{[^{}]+}/g,(function(t){return t in e?e[t]:""}))};e.substituteValues=T;e.generateRedirectPathWithoutDeepLink=function(t,e,a,r,n,i,c,s,A){var d={"{locale}":c.replace("-","/"),"{origin}":t.StationCode,"{destination}":e.StationCode,"{adult}":n.adult,"{child}":n.child,"{infant}":n.infant,"{promoCode}":i&&i.length>0?i:"N","{currency}":s.toUpperCase(),"{sortType}":"ST"},_={};_["{departureDate}"]=(0,o.format)(a.departureDate,l.DATE_FORMAT.AA_DATE_FORMAT),r.toUpperCase()===l.TRIP_TYPES.RETURN?(_["{tripType}"]=l.TRIP_TYPES.RETURN,_["{returnDate}"]=(0,o.format)(a.returnDate,l.DATE_FORMAT.AA_DATE_FORMAT)):(_["{tripType}"]=l.TRIP_TYPES.ONE_WAY,_["{returnDate}"]="N");var E=u(u({},d),_);return T(l.ENVIRONMENT_URL[A].AA_FLIGHT_SEARCH_PATH_PARAMETERS,E)};var d=function(t,e){return!(!Object.prototype.hasOwnProperty.call(t,e)||void 0===t[e]||t[e])};function _(t){var e=document.cookie.match("(^|;) ?".concat(t,"=([^;]*)(;|$)"));return e?e[2]:null}e.isKiwiStation=d;var E=function(t,e,a){var r="";if(a){var n=new Date;n.setTime(n.getTime()+60*a*1e3),r="; expires=".concat(n.toGMTString())}document.cookie="".concat(t,"=").concat(e).concat(r,"; path=/; secure")};e.createCookie=E;var p=function(t){return t===l.FILTER_TYPE.CITY_KEY};e.isCity=p;var S=function(t){return p(t.StationType)?t.CityCode:t.StationCode};e.fetchCode=S;e.constructLocalStorageObject=function(t,e,a,r,n,s,u,A){var T=(new Date).toISOString(),f=S(t),O=S(e);A&&e&&e.Stations&&(e.provider=(0,c.getProviderForCitySearch)(e.Stations,l.AIRLINES.AAB));var I={route:{origin:f,destination:O,isOriginCity:A&&p(t.StationType),isDestinationCity:A&&p(e.StationType),originData:i.default.removeObject(t,l.STATIONS),destinationData:i.default.removeObject(e,l.STATIONS)},date:{depart:(0,o.format)(r,l.DATE_FORMAT.AA_DATE_FORMAT),return:n?(0,o.format)(n,l.DATE_FORMAT.AA_DATE_FORMAT):null},passengers:{adult:a.adult,children:a.child,infant:a.infant},tripType:u,created_at:T,StationName:A&&p(e.StationType)?e.CityName:e.StationName,DepartStationName:A&&p(t.StationType)?t.CityName:t.StationName,IsDepartKiwiStation:d(t,l.AA_FLIGHT),IsArrivalKiwiStation:d(e,l.AA_FLIGHT),IsKiwiRoute:e.Provider===l.AIRLINES.FLYBEYOND,promo:s,originCountry:t.CountryCode,destinationCountry:e.CountryCode};n||delete I.date.return;var C=A?8:20;if(null!==localStorage.getItem("recentSearches")){var N=JSON.parse(decodeURIComponent(localStorage.getItem("recentSearches")));N.length===C?(N.pop(),N.unshift(I)):N.unshift(I),localStorage.setItem("recentSearches",encodeURIComponent(JSON.stringify(N)))}else{var R=[];R.push(I),localStorage.setItem("recentSearches",encodeURIComponent(JSON.stringify(R)))}try{var m=l.COOKIE_OBJECT_FLIGHT.replace("{origin}",f).replace("{destination}",O).replace("{originCountry}",t.CountryCode).replace("{destinationCountry}",e.CountryCode).replace("{StationName}",e.StationName).replace("{DepartStationName}",t.StationName).replace("{depart}",(0,o.format)(r,l.DATE_FORMAT.AA_DATE_FORMAT)).replace("{return}",n?(0,o.format)(n,l.DATE_FORMAT.AA_DATE_FORMAT):"N").replace("{adult}",a.adult).replace("{children}",a.child).replace("{infant}",a.infant).replace("{tripType}",u).replace("{created_at}",T).replace("{promo}",s).replace("{IsDepartKiwiStation}",d(t,"AAFlight")).replace("{IsArrivalKiwiStation}",d(e,"AAFlight")).replace("{IsKiwiRoute}",e.Provider===l.AIRLINES.FLYBEYOND);if(null!==_("flightRecentSearch")){var L=JSON.parse(_("flightRecentSearch"));L.length>=2?((L=L.slice(0,2)).pop(),L.unshift(encodeURIComponent(m))):L.unshift(encodeURIComponent(m)),E("flightRecentSearch",JSON.stringify(L),10080)}else{var h=[];h.push(encodeURIComponent(m)),E("flightRecentSearch",JSON.stringify(h),10080)}}catch(y){}};e.constructPassengerData=function(t,e,a){var r={};return t.forEach((function(t){if(Object.prototype.hasOwnProperty.call(t,"data")&&(r.min=1,r.max=9),Object.prototype.hasOwnProperty.call(t,"adult")){var a={type:"adult"};a.label=e[0].data[0][l.PAX_TRANSLATION_KEYS.ADULT],a.subLabel=e[0].data[0][l.PAX_TRANSLATION_KEYS.ADULT_AGE_LIMIT],a.min="infant",r.adult=a}if(Object.prototype.hasOwnProperty.call(t,"child")){var n={type:"child"};n.label=e[0].data[0][l.PAX_TRANSLATION_KEYS.CHILD],n.subLabel=e[0].data[0][l.PAX_TRANSLATION_KEYS.CHILD_AGE_LIMIT],n.min=0,r.child=n}if(Object.prototype.hasOwnProperty.call(t,"infant")){var i={type:"infant"};i.label=e[0].data[0][l.PAX_TRANSLATION_KEYS.INFANT],i.subLabel=e[0].data[0][l.PAX_TRANSLATION_KEYS.INFANT_AGE_LIMIT],i.min=0,i.max="adult",r.infant=i}})),u(u({},r),{passengerCount:a})};var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,a={adult:0,child:0,infant:0};if(!t)return a;var r=t&&t.adult+t.child+t.infant;return r<=e?t:t.adult>=e?(a.adult=e,a):(a.adult=t.adult,t.child+t.adult<=e?(a.child=t.child,t.infant+a.adult+a.child<=e?a.infant=t.infant:a.infant=e-(a.adult+a.child)):(a.child=e-a.adult,a.infant=0),a)};e.dropPaxToSnap=f;e.getSNAPRedirection=function(t){if(!t)return null;var e=t.currency,a=t.locale,r=t.environment,n=t.destination,i=t.passengers,c=t.origin,s=t.tripDates,u=t.promoCode;if(!n||!c||!i||!s)return null;for(var A={},T=f(i,l.SNAP_DATA.MAX_PASSENGERS),d=[],_=[],E=0;E<(T.child||0);E++)d.push(l.SNAP_DATA.CHILD_AGE_DEFAULT);for(var p=0;p<(T.infant||0);p++)_.push(l.SNAP_DATA.INFANT_AGE_DEFAULT);A.orig=c.StationCode,A.dest=n.StationCode,A.fromDateFlight=(0,o.format)(s.departureDate,l.DATE_FORMAT.AA_DATE_FORMAT),A.toDateFlight=(0,o.format)(s.returnDate,l.DATE_FORMAT.AA_DATE_FORMAT),A.adults=T.adult,d.length>0&&(A.children=d),_.length>0&&(A.infants=_),A.language=a,A.currency=e.toUpperCase(),A.rooms=1,u.length>0&&(A.promoCode=u);var S=Object.keys(A).map((function(t){return"".concat(t,"=").concat(A[t])})).join("&");return"".concat(l.ENVIRONMENT_URL[r].AA_BASE_URL).concat(l.ENVIRONMENT_URL[r].SNAP_URL,"?").concat(S)};e.findGtmTag=function(t){return t===l.STATION_ICONS.RECENT_SEARCH_ICON?l.GTM_TAGS.RECENT_SEARCHES:t===l.STATION_ICONS.LOCATION_ON_ICON?l.GTM_TAGS.NEAREST_AIRPORT:l.GTM_TAGS.GENERAL};e.findCarrierGtmTag=function(t){return t===l.AIRLINES.OTA||t===l.AIRLINES.FLYBEYOND?t.toLowerCase():l.GTM_TAGS.FLIGHTS};e.findTripGtmTag=function(t){return t===l.TRIP_TYPES.RETURN?l.GTM_TAGS.RETURN:l.GTM_TAGS.ONEWAY};e.changeDateFormat=function(t){var e=t.toLocaleDateString().split("/");return 3===e.length?"".concat(e[2],"-").concat(e[1],"-").concat(e[0]):""}},"9LV8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.USW_COMPONENT_TYPES=e.TYPE=e.TRIP_TYPE_DATA=e.TRIP_TYPES=e.TRAVEL_CLASS_TITLE=e.TRAVEL_CLASS_CONFIG=e.TRAVEL_CLASS=e.SUB_VALUE=e.STATION_TYPES=e.STATION_ICONS=e.STATIONS=e.SNAP_WINDOW=e.SNAP_DATA=e.REDIRECT_URL_DEV=e.REDIRECT_URL=e.PROVIDERS=e.PREFILL_TEST_DATA=e.PLATFORM=e.PAX_TRANSLATION_KEYS=e.PASSENGER_SELECTION_DATA=e.ORIGIN_CITY=e.ORIGIN=e.OPERATING_AIRLINE=e.MAX_DAYS=e.LOCAL_HOST_URL=e.LFC_ROLE=e.LFC_MEMBER_V2=e.LFC_MEMBER=e.LABEL_RETURN=e.LABEL_DEPART=e.ITEMS=e.GTM_TAGS=e.FILTER_TYPE=e.ENVIRONMENT_URL=e.ENVIRONMENT=e.DESTI_PATH=e.DESTI_KEY=e.DESTI_CITY_KEY=e.DESTINATION_KEY=e.DEFAULT_LOCALE=e.DEFAULT_GEOID=e.DEFAULT_CURRENCY=e.DEFAULT_CONTEXTUAL_PRODUCT_ID=e.DATE_FORMAT=e.DATA_VISOR_EVENT=e.DATAFORMAT_DATA=e.COOKIE_OBJECT_FLIGHT=e.CHINA_GEO=e.CHANNEL_HASH=e.BOOLEAN=e.ASYNC_DATA_KEYS=e.AIRLINE_PROFILE=e.AIRLINES=e.ACTION_CONSTANTS=e.AA_GAID_COOKIE_NAME=e.AA_FLIGHT=void 0;e.USW_COMPONENT_TYPES={HERO_BANNER:"heroBanner",PLACEPICKER:"placepicker",DATEPICKER:"datepicker",MULTI_ROOM_SELECT:"multi_room_select",PAX_COUNTER:"passenger_counter",DROPDOWN:"dropdown",LINK:"link",CHECKBOX:"checkbox",BUTTON:"button",PROMOCODE:"promoCode",TRIP_TYPE:"trip_type",SNAP_CHECKBOX:"snapCheckbox"};e.LFC_MEMBER={ANONYMOUS:0,LOGGEDIN:1};e.LFC_MEMBER_V2={ANONYMOUS:"anonymous",LOGGEDIN:"member"};e.BOOLEAN={FALSE:"false",TRUE:"true"};e.LFC_ROLE={DESKTOP:0,MOBILE:1};e.LOCAL_HOST_URL="http://local.airasia.com:4200/";e.LABEL_DEPART="Depart date";e.LABEL_RETURN="Return Date";e.DATAFORMAT_DATA={date:{noYear:"dd mmm",fullWithDay:"ddd, dd mmm",noDay:"mmm yyyy",abbreviate:"dd mmm yyyy",general:"dd/mm/yyyy"},shortDaysTranslation:{wed:"Wed",sun:"Sun",fri:"Fri",tue:"Tue",mon:"Mon",thu:"Thu",sat:"Sat"},shortMonthTranslation:{mar:"Mar",feb:"Feb",aug:"Aug",sep:"Sep",apr:"Apr",jun:"Jun",jul:"Jul",jan:"Jan",may:"May",nov:"Nov",dec:"Dec",oct:"Oct"},fullDaysTranslation:{wed:"Wednesday",sun:"Sunday",fri:"Friday",tue:"Tuesday",mon:"Monday",thu:"Thursday",sat:"Saturday"},fullMonthTranslation:{mar:"March",feb:"February",aug:"August",sep:"September",apr:"April",jun:"June",jul:"July",jan:"January",may:"May",nov:"November",dec:"December",oct:"October"},letterDaysTranslation:{wed:"W",sun:"S",fri:"F",tue:"T",mon:"M",thu:"T",sat:"S"}};e.ITEMS=[{iconName:"LocationOnIcon",iconDisplayName:"city",mainDisplayName:"port Dicksonaaa",airportCode:"DMK",value:{}},{iconName:"HotelIcon",iconDisplayName:"airport",mainDisplayName:"port Dicksonbbb",airportCode:"DMK",value:{}}];e.PASSENGER_SELECTION_DATA={min:3,max:24,adult:{type:"adult",label:"Adult",subLabel:"18 years and above",min:"infant",max:"12"},child:{type:"child",label:"Child",subLabel:"Between 12 years and 17 years",min:0,max:"6"},infant:{type:"infant",label:"Infant",subLabel:"0 years",max:"adult",min:0},passengerCount:{adult:2,child:1,infant:0}};e.ACTION_CONSTANTS={DATA_FETCH_START:"DATA_FETCH_START",DATA_FETCH_SUCCESS:"DATA_FETCH_SUCCESS",DATA_FETCH_FAILURE:"DATA_FETCH_FAILURE"};e.TYPE={PAIRED:"paired",BUNDLED:"bundled"};e.AIRLINE_PROFILE={DOTREZ:"dotrez",KIWI:"kiwi",ALL:"all"};e.ENVIRONMENT={DEVELOPMENT:"DEVELOPMENT",PRE_PRODUCTION:"PRE_PRODUCTION",PRODUCTION:"PRODUCTION",STAGING:"STAGING"};e.ENVIRONMENT_URL={DEVELOPMENT:{AA_BASE_URL:"https://www.devairasia.com/",AA_FLIGHT_SEARCH_PATH_PARAMETERS:"select/{locale}/{origin}/{destination}/{departureDate}/{returnDate}/{adult}/{child}/{infant}/{tripType}/{promoCode}/{currency}/{sortType}",AA_MULTI_CITY_URL:"https://flybeyond.airasia.com/en/landing/multicity",KONG_URL:"https://k.dev-apiairasia.com",GCS_URL:"https://ppsch.apiairasia.com",FEATURE_FLAG_ENV:"dev",LISTING_APP_URL:"https://www.devairasia.com/flights/search/",AAI_BASE_URL:"https://preprod.airasia.co.in/flight-availability?/",SNAP_URL:"snap/hotels/list",STATIC_URL:"https://static.stgairasia.com",FUNNEL_CONTROL_URL:"https://flights.devairasia.{domain}/fp/funnels"},PRE_PRODUCTION:{AA_BASE_URL:"https://www.ppairasia.com/",AA_FLIGHT_SEARCH_PATH_PARAMETERS:"select/{locale}/{origin}/{destination}/{departureDate}/{returnDate}/{adult}/{child}/{infant}/{tripType}/{promoCode}/{currency}/{sortType}",AA_MULTI_CITY_URL:"https://flybeyond.airasia.com/en/landing/multicity",KONG_URL:"https://k.preprod-apiairasia.com",GCS_URL:"https://sch.apiairasia.com",FEATURE_FLAG_ENV:"preprod",LISTING_APP_URL:"https://www.ppairasia.com/flights/search/",AAI_BASE_URL:"https://www.airasia.co.in/flight-availability?/",SNAP_URL:"snap/hotels/list",STATIC_URL:"https://static.airasia.com",FUNNEL_CONTROL_URL:"https://flights.ppairasia.{domain}/fp/funnels"},PRODUCTION:{AA_BASE_URL:"https://www.airasia.com/",AA_FLIGHT_SEARCH_PATH_PARAMETERS:"select/{locale}/{origin}/{destination}/{departureDate}/{returnDate}/{adult}/{child}/{infant}/{tripType}/{promoCode}/{currency}/{sortType}",AA_MULTI_CITY_URL:"https://flybeyond.airasia.com/en/landing/multicity",KONG_URL:"https://k.apiairasia.com",GCS_URL:"https://sch.apiairasia.com",FEATURE_FLAG_ENV:"production",LISTING_APP_URL:"https://www.airasia.com/flights/search/",AAI_BASE_URL:"https://www.airasia.co.in/flight-availability?/",SNAP_URL:"snap/hotels/list",STATIC_URL:"https://static.airasia.com",FUNNEL_CONTROL_URL:"https://flights.airasia.{domain}/fp/funnels"},STAGING:{AA_BASE_URL:"https://www.stgairasia.com/",AA_FLIGHT_SEARCH_PATH_PARAMETERS:"select/{locale}/{origin}/{destination}/{departureDate}/{returnDate}/{adult}/{child}/{infant}/{tripType}/{promoCode}/{currency}/{sortType}",AA_MULTI_CITY_URL:"https://flybeyond.airasia.com/en/landing/multicity",KONG_URL:"https://k.stg-apiairasia.com",GCS_URL:"https://ppsch.apiairasia.com",FEATURE_FLAG_ENV:"staging",LISTING_APP_URL:"https://www.stgairasia.com/flights/search/",AAI_BASE_URL:"https://preprod.airasia.co.in/flight-availability?/",SNAP_URL:"snap/hotels/list",STATIC_URL:"https://static.stgairasia.com",FUNNEL_CONTROL_URL:"https://flights.stgairasia.{domain}/fp/funnels"}};e.ASYNC_DATA_KEYS={FEATURE_FLAG:"feature_flag",ORIGIN_STATIONS:"originStationsData",SEARCH_DEEP_LINK:"searchDeepLink",DATA_VISOR:"dataVisor",NEAREST_AIRPORT:"nearest_airport",DESTINATION_STATIONS:"destination_stations",BASE_CURRENCY:"baseCurrency",CALENDAR_DATA:"calendarDateFormatData",MULTI_CURRENCY:"multiCurrency",OTA_GEOID_LIST:"otaGeoidList",FUNNEL_CONTROL_SERVICE:"funnelControlService"};e.DEFAULT_LOCALE="en-gb";e.DEFAULT_CURRENCY="USD";e.DEFAULT_GEOID="MY";e.STATION_TYPES={AIR_PORTS:"A",FERIES:"F",HOTEL_OR_BUSES:"B",CITY:"C"};e.STATION_ICONS={AIR_PORTS_ICON:"FlightIcon",HOTEL_OR_BUSES_ICON:"ApartmentIcon",FERIES_ICON:"IslandTransfer",LOCATION_ON_ICON:"LocationOnIcon",RECENT_SEARCH_ICON:"History",CALL_MADE_ICON:"CallMadeIcon"};e.COOKIE_OBJECT_FLIGHT="{origin}|{destination}|{originCountry}|{destinationCountry}|{StationName}|{DepartStationName}|{depart}|{return}|{adult}|{children}|{infant}|{tripType}|{created_at}|{promo}|{IsDepartKiwiStation}|{IsArrivalKiwiStation}|{IsKiwiRoute}";e.DATE_FORMAT={KIWI_DATE_FORMAT:"dd-MM-yyyy",AA_DATE_FORMAT:"yyyy-MM-dd",LISTING_DATE_FORMAT:"dd/MM/yyyy",RECENT_SEARCH_FORMAT:"MM/dd/yyyy"};e.AIRLINES={FLYBEYOND:"FLYBEYOND",AAI:"AAI",AAB:"AAB",OTA:"OTA"};e.TRIP_TYPES={RETURN:"R",ONE_WAY:"O"};e.CHANNEL_HASH={mobileWeb:"98ba1fad5baab2959fd06259acc292c6ebf46e210735882afc32a084",web:"906a14a4c039ea4af65874742638ddae5c3ec9c6bbc9026eea35f00f"};e.DATA_VISOR_EVENT={EDIT_PAGE:"editsearch",HOME_PAGE:"homepage"};e.PREFILL_TEST_DATA={promoCode:"NZR",from:"LCY",to:"BLR",tripType:"O",depart:"05/19/2020",return:"05/20/2020",passengers:{adult:4,child:1,infant:3}};e.TRIP_TYPE_DATA=[{label:"Round Trip",selectionType:"select",code:"R"},{label:"One-way",selectionType:"select",code:"O"},{label:"Multi-city",selectionType:"redirect",code:"M",url:"https://flybeyond.airasia.com/en/landing/multicity"}];e.PAX_TRANSLATION_KEYS={ADULT:"adultSingle",ADULT_AGE_LIMIT:"adultAgeLimit",CHILD:"childSingle",CHILD_AGE_LIMIT:"childAgeLimit",INFANT:"infantSingle",INFANT_AGE_LIMIT:"infantAgeLimit"};e.GTM_TAGS={RECENT_SEARCHES:"recent.fs.list",NEAREST_AIRPORT:"nearest.fs.list",GENERAL:"gnral",OTA:"ota",FLIGHTS:"flights",ONEWAY:"Oneway",RETURN:"Return"};e.AA_GAID_COOKIE_NAME="__airasiaga";e.DEFAULT_CONTEXTUAL_PRODUCT_ID="flights";e.SNAP_DATA={MAX_PASSENGERS:6,CHILD_AGE_DEFAULT:"1_11",INFANT_AGE_DEFAULT:"1_1"};e.SNAP_WINDOW={WIDTH:520,HEIGHT:570};e.TRAVEL_CLASS={DEFAULT:"economy",ECONOMY:"economy",PREMIUM_ECONOMY:"premium_economy",PREMIUM:"premium",SPECIAL_CLASS:"special_class"};e.PLATFORM={WEB:"web",MOBILE:"mobile"};e.REDIRECT_URL="https://www.airasia.com";e.REDIRECT_URL_DEV="https://www.devarasia.com";e.MAX_DAYS=510;e.TRAVEL_CLASS_CONFIG=[{data:[{label:"Economy",value:"economy",code:"M"},{label:"Business",value:"business",code:"C"},{label:"Premium Economy",value:"premium",code:"W"},{label:"First Class",value:"first",code:"F"}]}];e.TRAVEL_CLASS_TITLE="Travel Class";e.SUB_VALUE="com";e.FILTER_TYPE={STATION_CODE:"StationCode",CITY_CODE:"CityCode",STATION_KEY:"A",CITY_KEY:"C",STATION_TYPE:"StationType"};e.AA_FLIGHT="AAFlight";e.STATIONS="Stations";e.DESTINATION_KEY="isDestinationCity";e.ORIGIN="origin";e.ORIGIN_CITY="originCity";e.PROVIDERS={OTA:"OTA",AAB:"AAB"};e.OPERATING_AIRLINE={PROVIDER:"Provider",KEY:"AAFlight"};e.CHINA_GEO="CN";e.DESTI_PATH="/v3/destination/";e.DESTI_CITY_KEY="destinationCity";e.DESTI_KEY="destination"},Dsw7:function(t,e,a){"use strict";var r=a("TqRt"),n=a("cDf5");Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.OpenModalMobile=void 0;var i=r(a("pVnL")),o=r(a("J4zp")),c=_(a("q1tI")),l=_(a("vOnD")),s=r(a("NP27")),u=r(a("47re")),A=r(a("01J8")),T=r(a("gZWo"));function d(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(d=function(t){return t?a:e})(t)}function _(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!==typeof t)return{default:t};var a=d(e);if(a&&a.has(t))return a.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var c=i?Object.getOwnPropertyDescriptor(t,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=t[o]}return r.default=t,a&&a.set(t,r),r}var E=function(t){return(0,l.keyframes)(["0%{opacity:0;height:0;}25%{opacity:0.25;}50%{opacity:0.5;}75%{opacity:0.75;}100%{opacity:1;height:","}"],t.height)};e.OpenModalMobile=E;var p=l.default.div.withConfig({displayName:"BottomSheet__BottomSheetOverlay",componentId:"sc-5ceq86-0"})((function(t){var e=t.theme,a=t.backgroundColor,r=t.opacity,n=t.zIndex;return"\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: ".concat(e.backgroundColor[a],";\n    z-index: ").concat(n,";\n    opacity: ").concat(r,";\n  ")}));p.displayName="BottomSheetOverlay";var S=l.default.div.withConfig({displayName:"BottomSheet__CloseBtnWrapper",componentId:"sc-5ceq86-1"})(["position:absolute;top:",";",":",";cursor:pointer;"],(function(t){return t.theme.space.semi}),(function(t){return t.closeBtnAlignment}),(function(t){return t.theme.space.standard}));S.displayName="BottomSheetCloseBtnWrapper";var f=l.default.div.withConfig({displayName:"BottomSheet__BottomSheetWrapper",componentId:"sc-5ceq86-2"})(["width:100%;position:fixed;overflow-y:auto;bottom:",";left:",";border-radius:"," box-sizing:border-box;overscroll-behavior:contain;",""],(function(t){return t.theme.space.none}),(function(t){return t.theme.space.none}),(function(t){var e=t.theme;return"".concat(e.space.XXXSmall,"  ").concat(e.space.XXXSmall," ").concat(e.space.none," ").concat(e.space.none)}),(function(t){return(0,l.css)(["background-color:",";z-index:",";animation:"," ","s linear 0s 1 normal forwards;height:",";border-radius:",";"],t.theme.colors[t.background]||t.theme.colors.default,t.zIndex,t.isAnimationOn&&E(t.height),t.animationDuration,t.height,(function(t){var e=t.theme;return t.withContainerRadius?"".concat(e.space.XXXSmall,"  ").concat(e.space.XXXSmall," ").concat(e.space.none," ").concat(e.space.none):"unset"}))})),O=l.default.div.withConfig({displayName:"BottomSheet__HeaderContainer",componentId:"sc-5ceq86-3"})(["display:flex;justify-content:space-between;flex-direction:row;padding:",";background:",";box-shadow:",";position:",";top:",";z-index:",";"],(function(t){return t.theme.space.small}),(function(t){return t.theme.backgroundColor.default}),(function(t){var e=t.theme;return t.showHeaderContainerShadow&&"".concat(e.space.none," ").concat(e.space.mini," 6px rgba(0, 0, 0, 0.2)")}),(function(t){return t.fixedHeader?"sticky":"relative"}),(function(t){return t.fixedHeader?"0":"unset"}),(function(t){return t.fixedHeader?"100":"auto"})),I=l.default.div.withConfig({displayName:"BottomSheet__HeaderTitleWrapper",componentId:"sc-5ceq86-4"})(["display:flex;justify-content:space-between;"]),C=l.default.div.withConfig({displayName:"BottomSheet__CloseWrapper",componentId:"sc-5ceq86-5"})(["display:flex;justify-content:space-between;top:",";cursor:pointer;"],(function(t){return t.theme.space.semi})),N=c.default.memo((function(t){var e=t.show,a=t.theme,r=t.isAnimationOn,n=t.animationDuration,T=t.children,d=t.background,_=t.zIndex,E=t.height,N=t.onClose,R=t.accessible,m=t.showOverlay,L=t.overlayBackgroundColor,h=t.overlayOpacity,y=t.showCloseBtn,D=t.closeBtnAlignment,g=t.customProperties,P=t.headerTitle,v=t.withContainerRadius,b=t.fixedHeader,U=t.showHeaderContainerShadow,F=(0,c.useContext)(l.ThemeContext),M=(0,c.useState)(e),w=(0,o.default)(M,2),Y=w[0],G=w[1],B=_-1;(0,c.useEffect)((function(){G(e)}),[e]);var H=function(t){N&&N(t),G(!1)},j=function(){return c.default.createElement(c.default.Fragment,null,Y&&c.default.createElement(c.default.Fragment,null,m&&c.default.createElement(p,{onClick:H,backgroundColor:L,opacity:h,zIndex:B}),c.default.createElement(f,(0,i.default)({zIndex:_,height:E,isAnimationOn:r,animationDuration:n,background:d},g,{withContainerRadius:v}),y&&""!==P?c.default.createElement(O,{fixedHeader:b,showHeaderContainerShadow:U},c.default.createElement(I,null,c.default.createElement(A.default,{theme:a,bold:!0},P)),c.default.createElement(C,{onClick:H,closeBtnAlignment:D},c.default.createElement(u.default,{fontsize:"titleNormal",icon:"CloseIcon",color:"greyDark",accessible:R,theme:a}))):y?c.default.createElement(S,{onClick:H,closeBtnAlignment:D},c.default.createElement(u.default,{fontsize:"titleNormal",icon:"CloseIcon",color:"greyDark",accessible:R,theme:a})):null,T)))};return F?j():c.default.createElement(s.default,{theme:a},j())}));N.propTypes=T.default.PropTypes,N.defaultProps=T.default.DefaultProps;var R=N;e.default=R},"H/iq":function(t,e,a){"use strict";var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.uniqueArrElements=e.stationMatchesUserInput=e.sortStations=e.parseSuggestions=e.parseItems=e.hasDuplicates=e.getUnmatchedCityCodeObject=e.getStationObjectFromCode=e.getRecentSearches=e.getRecentCodeData=e.getProviderForCitySearch=e.getMatchedCityCodeObject=e.getIcon=e.getDestinationProviderForCitySearch=e.getDestinationAirportsObject=e.getDestinationAirportsList=e.getCityCodes=e.formatStationObject=e.formatStationDisplayName=e.filteredSuggestion=e.filterPrioritizedData=e.fetchStationObject=e.checkIfValidStation=e.assignPriorityToOrphanCities=e.addRecentSearchLabelIcon=e.addNearestAirportLocationIcon=void 0;var n=r(a("J4zp")),i=r(a("lSNA")),o=a("9LV8");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){(0,i.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var s=function(t,e){if(t)return e&&t?t.sort((function(t,e){return t.Priority-e.Priority||t.StationName.localeCompare(e.StationName)})):t.sort((function(t,e){return t.StationName.localeCompare(e.StationName)})),t};e.sortStations=s;var u=function(t,e){if(!t||!t.StationName||!t.StationCode)return!1;var a={StationName:t.StationName.toLowerCase(),StationCode:t.StationCode.toLowerCase(),PinYin:(t.PinYin||"").toLowerCase(),AlternativeName:(t.AlternativeName||"").toLowerCase(),AirportName:(t.AirportName||"").toLowerCase(),CountryName:(t.CountryName||"").toLowerCase(),CityName:(t.CityName||"").toLowerCase(),CityCode:(t.CityCode||"").toLowerCase()};switch(!0){case a.CityName.startsWith(e):return t.Priority=0,!0;case a.CityCode.startsWith(e):return t.Priority=1,!0;case a.StationName.startsWith(e):return t.Priority=2,!0;case a.StationCode.startsWith(e):return t.Priority=3,!0;case a.PinYin.startsWith(e):return t.Priority=4,!0;case a.StationName.split(" ").some((function(t){return t.startsWith(e)})):return t.Priority=5,!0;case a.AlternativeName.startsWith(e):return t.Priority=6,!0;case a.AlternativeName.split(" ").some((function(t){return t.startsWith(e)})):return t.Priority=7,!0;case a.AirportName.startsWith(e):return t.Priority=8,!0;case a.AirportName.split(" ").some((function(t){return t.startsWith(e)})):return t.Priority=9,!0;case a.CountryName.startsWith(e):return t.Priority=10,!0;case a.CountryName.split(" ").some((function(t){return t.startsWith(e)})):return t.Priority=11,!0}};e.stationMatchesUserInput=u;var A=function(t){switch(t&&t.toUpperCase()){case o.STATION_TYPES.AIR_PORTS:return o.STATION_ICONS.AIR_PORTS_ICON;case o.STATION_TYPES.FERIES:return o.STATION_ICONS.FERIES_ICON;case o.STATION_TYPES.HOTEL_OR_BUSES:return o.STATION_ICONS.HOTEL_OR_BUSES_ICON;case o.STATION_TYPES.CITY:return o.STATION_ICONS.LOCATION_ON_ICON;default:return""}};e.getIcon=A;e.addNearestAirportLocationIcon=function(t){var e=[];return t&&t.forEach((function(t){var a=l({},t);a.iconName=o.STATION_ICONS.LOCATION_ON_ICON,e.push(a)})),e};e.addRecentSearchLabelIcon=function(t){var e=[];return t&&t.forEach((function(t){if(t){var a=l({},t);a.iconName=o.STATION_ICONS.RECENT_SEARCH_ICON,e.push(a)}})),e};var T=function(t){if(t)return l(l({},t),{},{mainDisplayName:t.StationType&&t.StationType===o.FILTER_TYPE.CITY_KEY?"".concat(t.CityName):"".concat(t.AirportName),iconName:t.StationType?A(t.StationType):"",airportCode:t.StationCode,carrier:!0===t.AAFlight?"AAI":"KIWI"})};e.formatStationObject=T;var d=function(t){return t&&t.map((function(t){return null!==t&&T(t)})).filter((function(t){return""!==t.iconName}))};e.parseItems=d;e.formatStationDisplayName=function(t){if(t)return l(l({},t),{},{mainDisplayName:t.IsCity?"".concat(t.CityName):"".concat(t.AirportName)})};e.parseSuggestions=function(t){return t&&t.length>0?d(t):[]};var _=function(t,e){return t&&t.length?t.some((function(t){return t.Provider===e}))?o.PROVIDERS.AAB:o.PROVIDERS.OTA:o.PROVIDERS.AAB};e.getProviderForCitySearch=_;var E=function(t,e,a){var r,n,i=o.PROVIDERS.AAB;if(e&&e.length){var c=Object.values(e[0]),l=(n=t,(r=c)&&r.length?r.filter((function(t){return t.CityCode===n})):null);return l&&l.length>0&&(i=_(l,o.PROVIDERS.AAB)),a.AAFlight=i===o.PROVIDERS.AAB,a.Provider=i,a}return null};e.getDestinationProviderForCitySearch=E;e.getDestinationAirportsObject=function(t,e){var a=[];return t&&e&&(a=t.filter((function(t){var a=t.StationType===o.FILTER_TYPE.CITY_KEY?t.CityCode:t.StationCode;if(t.StationType===o.FILTER_TYPE.CITY_KEY)return E(a,[e],t);if(Object.prototype.hasOwnProperty.call(e,a)){var r=e[a].Provider;return t.AAFlight=e[a].AAFlight,t.Provider=r===o.PROVIDERS.AAB?r:o.PROVIDERS.OTA,t}return null}))),a};e.getDestinationAirportsList=function(t){var e={};return t&&Object.keys(t).map((function(a){return Object.keys(t[a]).map((function(r){return e[r]={AAFlight:t[a][r].AAFlight,Provider:t[a][r].Provider,CityCode:t[a][r].CityCode},null})),null})),e};e.getRecentCodeData=function(t,e,a,r){var i=t.split("/"),o=[];if(i.length>=2&&e){var c=(0,n.default)(i,2),l=c[0];if(o="true"===c[1]?e.filter((function(t){return!0===t.route[a]})):null,l&&o)for(var s=0;s<e.length;s++)return(o=e.filter((function(t){return t.route[r]===l})))[s].route.destinationData}return o};e.getStationObjectFromCode=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e){var a=t,r=o.FILTER_TYPE.STATION_KEY,i=o.FILTER_TYPE.STATION_CODE,c=t.split("/");if(c.length>=2){var l=(0,n.default)(c,2),s=l[0],u=l[1];i="true"===u?o.FILTER_TYPE.CITY_CODE:o.FILTER_TYPE.STATION_CODE,r="true"===u?o.FILTER_TYPE.CITY_KEY:o.FILTER_TYPE.STATION_KEY,a=s}for(var A=0;A<e.length;A++)if(e[A][i].toLowerCase()===a.toLowerCase()&&e[A].StationType===r)return e[A];return null}return null};e.getRecentSearches=function(){var t=localStorage.getItem("recentSearches");return null!=t&&(t=JSON.parse(decodeURIComponent(t))),t};var p=function(t,e){return!!(t&&t.StationName&&t.StationCode)&&t.StationCode.toLowerCase()===e};e.checkIfValidStation=p;e.fetchStationObject=function(t,e){return e&&t?e.filter((function(e){var a=t.toLowerCase();return p(e,a)?e:null})):null};e.assignPriorityToOrphanCities=function(t,e){var a=[];if(t)for(var r=0;r<t.length;r++){var n=JSON.parse(JSON.stringify(t[r]));n.CityCode="",n.CityName="",u(n,(e||"").toLowerCase())&&(n.CityName=t[r].CityName,n.CityCode=t[r].CityCode,a.push(n))}return a};e.hasDuplicates=function(t){if(t)return new Set(t).size!==t.length};e.getCityCodes=function(t){var e=[];if(t)for(var a=0;a<t.length;a++)e.push(t[a].CityCode);return e};e.getMatchedCityCodeObject=function(t,e){var a=[];if(t&&e)for(var r=function(r){a=t.filter((function(t){return t.CityCode!==e[r]}))},n=0;n<e.length;n++)r(n);return a};e.getUnmatchedCityCodeObject=function(t,e){var a=[];if(t&&e)for(var r=function(r){a=t.filter((function(t){return t.CityCode===e[r]}))},n=0;n<e.length;n++)r(n);return a};e.uniqueArrElements=function(t){if(t)return t.filter((function(t,e,a){return a.indexOf(t)===a.lastIndexOf(t)}))};var S=function(t){var e=[];if(t)for(var a=0;a<t.length;a++){var r=t[a];0!==r.Priority&&1!==r.Priority||e.push(r)}return e};e.filterPrioritizedData=S;e.filteredSuggestion=function(t,e){var a=[];if(e&&Array.isArray(e)){for(var r=e.filter((function(t){return t.StationType!==o.FILTER_TYPE.CITY_KEY})),n=e.filter((function(t){return t.StationType===o.FILTER_TYPE.CITY_KEY})),i=0;i<r.length;i++){var c=t?t.toLowerCase():"",l=r[i];u(l,(c||"").toLowerCase())&&a.push(l)}var A=S(a),T=[];A&&(T=A.reduce((function(t,e){return t[e.CityCode]=t[e.CityCode]||[],t[e.CityCode].push(e),t}),Object.create(null)));var d=0,_=[];if(T){var E=function(t){var e=t,a=Object.values(T)[d][0],r=n.filter((function(e){return e.CityCode===t})),i={CityName:a.CityName,CityCode:e,CountryName:a.CountryName,CountryCode:a.CountryCode,Priority:a.Priority,StationName:a.CityName,StationCode:e,IsCity:!0,Stations:[],iconName:o.STATION_ICONS.LOCATION_ON_ICON,Dest:r&&r.length>0?r[0].Dest:"",StationType:o.FILTER_TYPE.CITY_KEY};i.Stations=Object.values(T)[d],_.push(i),d+=1};for(var p in T)E(p)}for(var f=[],O=0;O<a.length;O++){var I=a[O];I.Priority>1&&f.push(I)}var C=_.concat(f);a=s(C,!0)}return a}},gZWo:function(t,e,a){"use strict";var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("17x9")),i=a("T9dM"),o=a("zdrh"),c={PropTypes:{theme:n.default.string,accessible:n.default.bool,show:n.default.bool,customProperties:n.default.object,background:n.default.string,zIndex:n.default.number,isAnimationOn:n.default.bool,height:n.default.string,animationDuration:n.default.number,showOverlay:n.default.bool,overlayBackgroundColor:n.default.oneOf(i.ARR_BACKGROUND_COLORS),overlayOpacity:n.default.string,showCloseBtn:n.default.bool,closeBtnAlignment:n.default.oneOf(o.CLOSE_BUTTON_ALIGNMENTS),onClose:n.default.func,headerTitle:n.default.string,withContainerRadius:n.default.bool,fixedHeader:n.default.bool,showHeaderContainerShadow:n.default.bool},DefaultProps:{theme:i.DEFAULT_THEME,accessible:!0,show:!0,isAnimationOn:!0,zIndex:o.DEFAULT_STYLE.Z_INDEX,height:o.DEFAULT_STYLE.HEIGHT,animationDuration:o.DEFAULT_STYLE.ANIMATION_DURATION,showOverlay:!1,overlayBackgroundColor:o.DEFAULT_STYLE.OVERLAY_BG_COLOR,overlayOpacity:o.DEFAULT_STYLE.OVERLAY_OPACITY,showCloseBtn:!1,closeBtnAlignment:"right",headerTitle:"",withContainerRadius:!0,fixedHeader:!1,showHeaderContainerShadow:!0}};e.default=c},zdrh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DEFAULT_STYLE=e.CLOSE_BUTTON_ALIGNMENTS=void 0;e.DEFAULT_STYLE={Z_INDEX:12,HEIGHT:"85%",ANIMATION_DURATION:.5,OVERLAY_BG_COLOR:"black",OVERLAY_OPACITY:"0.8"};e.CLOSE_BUTTON_ALIGNMENTS=["left","right"]}}]);