let step = 0;

let davita =  ["Airport Sunrise Dialysis #693", "Alta Acutes #3736", "Anaheim Dialysis #4057",
"Anaheim Hills Dialysis #5789", "Anaheim Springs Dialysis #11161",
"Anaheim West Dialysis #2485", "Antelope Valley Dialysis #1930",
"Antonio", "Arcadia Oaks Dialysis", "Artesia Home At Home #5892",
"Arvin Dialysis #5047", "Avalon Dialysis", "Bakersfield Acute #1100",
"Banning Dialysis", "Bastanchury Dialysis #5396", "Bellflower Dialysis Center #2138",
"Bermuda Dunes Dialysis #2495", "Beverly Hills Dialysis Center #663",
"Bixby Knolls Dialysis #2137", "Bluff Rd Dialysis #5430", "Boyle Heights Dialysis #5211",
"Brea Dialysis Center #876", "Burbank Dialysis #4021", "Camarillo Dialysis #5531",
"Canyon Springs Dialysis #2285", "Carabello Dialysis Center #1902",
"Carmel Mountain Dialysis #3569", "Carson Dialysis #5691", "Cathedra City Dialysis #4456",
"Cathedral City At Home #92234", "Central Coast Kidney Acutes #3740",
"Central Coast Kidney Center #12015", "Century City Dialysis-Pediatrics #4280",
"Century City At Home #6023", "Century City Dialysis #430", "Cerritos Dialysis #5788",
"Channel Isalnds Dialysis #5377", "Chino Dialysis #3506", "Citrus Valley At Home #6119",
"Citrus Valley Dialysis #2086", "College Dialysis #3559", "Colton Ranch Dialysis",
"Corona Dialysis Center #877", "Costa Mesa Dialysis #3614", "Covina Dialysis Center #618",
"Crescent Heights Dialysis Center #337", "Crossroads Dialysis #2112",
"Delano Dialysis #4026", "Diamond Valley Dialysis #1606", "Doctors Dialysis Center Of Montebello #335",
"Doctors Dialysis Of East Los Angeles #334", "Downey Dialysis Center #617",
"Downey Landing Dialysis Center #2218", "East La Plaza Dialysis #2541",
"Eaton Canyon Dialysis #331", "El Dorado Dialysis", "Encinitas Dialysis #3486",
"Escondido Dialysis #3055", "Firestone Blvd Dialysis #5153",
"Fontana Dialysis #4005", "Fountain Valley Dialysis #5791", "Fullerton Dialysis #3058",
"Garden Grove Harbor At Home #9669", "Garden Grove Harbor Dialysis #2264",
"Garfield Hemodialysis Center #613", "Gateway Plaza Dialysis #4320",
"Glendale Dialysis #3519", "Greater El Monte Dialysis Center #67",
"Hawthorne Dialysis #4349", "Hemet Dialysis Center #878", "Hesperia Dialysis Center #2278",
"Hi-Desert Dialysis #2568", "Highland Ranch Dialysis #2475",
"Hoag Acutes #3723", "Hollywood Dialysis Center #694", "Hollywood North Dialysis #2546",
"Huntington Beach Dialysis #3059", "Huntington Park Dialysis #2310",
"Imperial Care Dialysis Center #1523", "Imperial Dialysis #2542",
"Indian Wells Valley Dialysis #1931", "Inglewood Dialysis #3001",
"Iowa Street Dialysis #5794", "Kenneth Hahn Plaza Dialysis Center #267",
"Kidney Dialysis Care Unit #614", "La County Acutes #3778", "La Palma Dialysis #5790",
"Laguna Hills At Home #5829", "Laguna Hills North #2079", "Lake Elisnore Dialysis #443",
"Lakewood Dialysis Center #615", "Long Beach Harbor Dialysis #2140",
"Los Alamitos Dialysis #2344", "Los Angeles Dialysis Center #398",
"Los Angeles Downtown Dialysis #4056", "Magnolia West At Home #6079",
"Magnolia West Dialysis #2012", "Main Place At Home #5987", "Mainplace Dialysis Center #884",
"Mar Vista Dialysis Center #2073", "Menifee Home At Home #9646",
"Mission Viejo Dialysis #2564", "Mobile Dialysis Acutes #3219",
"Mojave Sage Dialysis #5070", "Montclair At Home #6158", "Montclair Dialysis Center #436",
"Monterey Park Dialysis Center #399", "Moorpark At Home #5828",
"Moorpark Dialysis #5235", "Moreno Valley Dialysis #5787", "Mountain Vista Dialysis Center #882",
"Murrieta Dialysis #1607", "Nephron Dialysis #5792", "Norco Dialysis #2011",
"North Glendale Dialysis #5530", "Norwalk Dialysis Center #672",
"Ontario Dialysis #2124", "Operational Umbrella #609", "Orange County Acutes #3053",
"Oxnard Dialysis #5557", "Palm Springs Dialysys #3067", "Palmdale Regional #1932",
"Paramount Dialysis Center #332", "Pasadena Foothills Dialysis #4329",
"Pismo Beach Dialysis #5603", "Pomona At Home #6326", "Pomona Dialysis #3004",
"Pomona Valley Dialysis #4344", "Premier Dialysis Center #437",
"Pismo Beach Dialysis #5603", "Rancho Cucamonga Ht At Home #6378",
"Riverside Dialysis Center #880", "Rosemead Springs Dialysis Center #15",
"Saddleback Dialysis #4061", "San Bernardino Ht At Home #9648",
"San Diego South Dialysis #3210", "San Diego Acutes #3488", "San Diego East Dialysis #3484",
"San Juan Capistrano South Dialysis #2560", "San Luis Obispo Acutes #1136",
"San Luis Obispo Dialysis #5601", "San Marcos At Home #6381",
"San Marcos Dialysis Center #2261", "San Ysidro Dialysis #3456",
"Santa Ana Dialysis Center #875", "Santa Fe Springs Dialysis #2260",
"Santa Monica Dialysis #3211", "Santa Paula #5534", "Sb-Lb Acutes #3724",
"Sfs Dialysis #5793", "Silver Lake Dialysis #2180", "Simi Valley At Home #5936",
"Simi Valley Dialysis #5533", "South Cerritos Dialysis #2455",
"South Valley At Home #6196", "South Valley Dialysis #1865",
"Sun City Menifee Dialysis #5068", "Temecula Dialysis Center #883",
"Templeton Dialysis #5602", "Thousand Oaks At Home #5935", "Thousand Oaks Dialysis #5532",
"Tower Acutes Dialysis #3444", "Tower Dialysis #3565", "Trc/Harbor-Ucla Mfi Total Renal Dialysis Center #697",
"Trc/Usc Kidney Center #690", "Tustin Dialysis #2019", "Ucla Acute Dialysis #431",
"United Dialysis Center #438", "University Park Dialysis Center #692",
"Upland Colonies #5476", "Upland Dialysis #3903", "Valley Dialysis #616",
"Valley View Dialysis Center #879", "Ventura Dialysis #5548",
"Victor Valley Dialysis #3009", "Washington Plaza Dialysis Center #439",
"West Glendale At Home #5824", "West Glendale Dialysis #4249",
"Westminster South Dialysis #3545", "Whittier Dialysis #2003",
"Wilshire Dialysis Center #661", "Yucaipa Dialysis Center #2094",
"Other"];

let fresenius = ["Fresenius Kidney Care Alhambra", "Fresenius Kidney Care Anaheim",
"Fresenius Kidney Care Antelope Valley", "Fresenius Kidney Care Bakersfield",
"Fresenius Kidney Care Bakersfield Northeast", "Fresenius Kidney Care Balboa - Imperial Valley Home Therapies",
"Fresenius Kidney Care Balboa - Kearny Mesa", "Fresenius Kidney Care Balboa - South Bay Home Therapies",
"Fresenius Kidney Care Balboa East Lakes", "Fresenius Kidney Care Bellflower",
"Fresenius Kidney Care Brawley", "Fresenius Kidney Care Buena Creek",
"Fresenius Kidney Care Burbank", "Fresenius Kidney Care Calexico",
"Fresenius Kidney Care CalexicoFresenius Kidney Care Camarillo",
"Fresenius Kidney Care Camarillo", "Fresenius Kidney Care Carson Community",
"Fresenius Kidney Care Channel Islands", "Fresenius Kidney Care Chula Vista South",
"Fresenius Kidney Care College", "Fresenius Kidney Care Conejo Valley Renal Center",
"Fresenius Kidney Care Culver City", "Fresenius Kidney Care East L.A.",
"Fresenius Kidney Care El Centro", "Fresenius Kidney Care El Monte",
"Fresenius Kidney Care Eucalyptus", "Fresenius Kidney Care Gateway Dialysis Center-East",
"Fresenius Kidney Care Hillcrest", "Fresenius Kidney Care Imperial County",
"Fresenius Kidney Care Inglewood", "Fresenius Kidney Care Irwindale",
"Fresenius Kidney Care La Jolla", "Fresenius Kidney Care LA Mesa",
"Fresenius Kidney Care Loma Linda", "Fresenius Kidney Care Long Beach",
"Fresenius Kidney Care Marina Bay", "Fresenius Kidney Care Mid-Wilshire",
"Fresenius Kidney Care Mission Hills", "Fresenius Kidney Care Mission Viejo",
"Fresenius Kidney Care National City", "Fresenius Kidney Care North Coast",
"Fresenius Kidney Care North Long Beach", "Fresenius Kidney Care North Orange County",
"Fresenius Kidney Care Norwalk East", "Fresenius Kidney Care Orange County Home Dialysis",
"Fresenius Kidney Care Oxnard", "Fresenius Kidney Care Paradise",
"Fresenius Kidney Care Rancho", "Fresenius Kidney Care Rancho Cucamonga",
"Fresenius Kidney Care Raven Dialysis", "Fresenius Kidney Care Riverside",
"Fresenius Kidney Care San Bernardino", "Fresenius Kidney Care San Fernando",
"Fresenius Kidney Care San Gabriel CAPD", "Fresenius Kidney Care San Diego DS Home Program",
"Fresenius Kidney Care San Ysidro", "Fresenius Kidney Care Santa Ana",
"Fresenius Kidney Care Santa Barbara", "Fresenius Kidney Care Santa Paula",
"Fresenius Kidney Care South Bay", "Fresenius Kidney Care South Bay Home Dialysis",
"Fresenius Kidney Care South Orange County", "Fresenius Kidney Care Van Nuys",
"Fresenius Kidney Care Ventura", "Fresenius Kidney Care West Covina",
"Fresenius Kidney Care West Los Angeles", "Fresenius Kidney Care Woodland Hills",
"Kidney Care Moreno Valley", "Liberty Dialysis Pasadena", "Liberty Dialysis Pasadena II",
"RAI Care Center Centinela-Inglewood", "RAI Care Center Colton-West C Street",
"RAI Care Center Compton-Los Angeles", "RAI Care Center Corporate Way - Palm Desert",
"RAI Care Center East First Tustin", "RAI Care Center East Olympic-Los Angeles",
"RAI Care Center E. 6th Street-Beaumont", "RAI Care Center Fletcher Parkway - El Cajon",
"RAI Care Center Foothill Blvd-Glendora", "RAI Care Center Fountain Valley Home Dialysis",
"RAI Care Center Garden Grove Blvd-Garden Grove", "RAI Care Center Hospital Circle-Westminster",
"RAI Care Center Indiana Court Redlands", "RAI Care Center Laguna Canyon-Irvine",
"RAI Care Center Mission Gorge - San Diego", "RAI Care Center Monroe - Indio",
"RAI Care Center North Garey", "RAI Care Center North Riverside-Rialto",
"RAI Care Center North Waterman-San Bernardino", "RAI Care Center South Brand- San Fernando Home Program",
"Renal Research Institute Newport Beach", "Renal Research Institute Newport Mesa",
"Renal Research Institute Newport Superior Dialysis Center",
"Other"];

$(document).ready(function(){
  // Steps
  $(document).on("click","#btnStep0,#btnStep1, #btnStep3, #btnStep4",function(){
    if ($(this).attr('id') == 'btnStep0') {
        if( $('#id_position').val() == "Choose Your Job" | $('#id_facility').val() == "Choose Your Employer") {
            alert("Please fill out the required fields");
        }
        else {
            $('#step' + step).css('display','none');
            step += 1;
            $('#step'+ step).css('display','block');
        }
    }
    else {
        $('#step' + step).css('display','none');
        step += 1;
        $('#step'+ step).css('display','block');
     }
  });
  // Prevent Zero Values for Shifts
  $(document).on("click", "#id_all_shifts, #id_opening, #id_mid, #id_breaks, #id_sick, #id_closing", function() {
    $(this).css('color','#000');
  });
  // Social Worker Exception
  $("#id_position").on("change", function() {
    if($(this).val() == "Social Worker") {
        $("#social").css("display","block");
        $("#other").css("display","none");
    }
  });
  // Facilities
  $("#id_facility").on("change", function() {
    if($(this).val() != "Other Facility") {
        $('label[for=id_location]').css("display","none");
        $("#id_location").css("display","none");
        if($(this).val() == "DaVita") {
               console.log("DaVita");
               let x = document.getElementById("id_clinic_name");
               for (var step = 0; step < davita.length; step++) {
                  var option = document.createElement("option");
                  option.text = davita[step];
                  x.add(option);
               }
        } else if ($(this).val() == "Fresenius Medical Care") {
               console.log("Fresenius");
               let x = document.getElementById("id_clinic_name");
               for (var step = 0; step < fresenius.length; step++) {
                  var option = document.createElement("option");
                  option.text = fresenius[step];
                  x.add(option);
               }
        }
    } else {
        $('label[for=id_location]').css("display","inline");
        $("#id_location").css("display","inline");
        $("#id_clinic_name").after('<input type="text" id="id_clinic_name" name="clinic_name" value="" class="form-control input-lg" /> ');
        $("#id_clinic_name").remove();
    }
  });
});
