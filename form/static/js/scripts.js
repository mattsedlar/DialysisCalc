let step = 0;

let davita =  ["Arvin Dialysis #5047", "Bakersfield Acute #1100", "Delano Dialysis #4026", "Indian Wells Valley Dialysis #1931", "Beverly Hills Dialysis Center #663", "Burbank Dialysis #4021", "Premier Dialysis Center #437", "Operational Umbrella #609", "Antonio", "South Valley At Home #6196 (#s See #1865)", "West Glendale Dialysis #4249 (#s Include #5824)", "Glendale Dialysis #3519", "North Glendale Dialysis #5530", "West Glendale At Home #5824 (#s See #4249)", "Hawthorne Dialysis #4349", "Huntington Park Dialysis #2310", "Imperial Dialysis #2542", "Airport Sunrise Dialysis #693", "Inglewood Dialysis #3001", "Antelope Valley Dialysis #1930", "Silver Lake Dialysis #2180", "Kenneth Hahn Plaza Dialysis Center #267", "Wilshire Dialysis Center #661", "Hollywood Dialysis Center #694", "Tower Dialysis #3565", "Crescent Heights Dialysis Center #337", "University Park Dialysis Center #692", "Doctors Dialysis Of East Los Angeles #334", "Century City Dialysis #430 (#s Include #4280 & #6023)", "Trc/Usc Kidney Center #690", "Century City At Home #6023 (#s See #430)", "Centruy City Dialysis-Pediatrics #4280 (#s See #430)", "Tower Acutes Dialysis #3444", "Ucla Acute Dialysis #431", "Boyle Heights Dialysis #5211", "Los Angeles Downtown Dialysis #4056", "Washington Plaza Dialysis Center #439", "Los Angeles Dialysis Center #398", "East La Plaza Dialysis #2541", "Carabello Dialysis Center #1902", "Kidney Dialysis Care Unit #614", "Imperial Care Dialysis Center #1523", "Hollywood North Dialysis #2546", "Palmdale Regional #1932", "Mar Vista Dialysis Center #2073", "Santa Monica Dialysis #3211", "Thousand Oaks Dialysis #5532 (#s Include #5935)", "Thousand Oaks At Home #5935 (#s See #5532)", "Valley Dialysis #616", "Psimo Beach Dialysis #5603", "San Luis Obispo Acutes #1136", "San Luis Obispo Dialysis #5601", "Templeton Dialysis #5602", "Central Coast Kidney Center #12015", "Central Coast Kidney Acutes #3740", "Camarillo Dialysis #5531", "Moorpark Dialysis #5235 (#s Include #5828)", "Moorpark At Home #5828 (#s See #5235)", "Oxnard Dialysis #5557", "Channel Islands Dialysis #5377", "Simi Valley Dialysis #5533 (#s Include #5936)", "Simi Valley At Home #5936 (#s See #5533)", "Ventura Dialysis #5548", "Santa Paula #5534", "Hemet Dialysis Center #0878", "Diamond Valley Dialysis #1606", "Lake Elisnore Dialysis #0443", "Menifee Home At Home #9646", "Canyon Springs Dialysis #2285", "Moreno Valley Dialysis #5787", "Valley View Dialysis Center #0879", "Murrieta Dialysis #1607", "Norco Dialysis #2011", "Sun City Menifee Dialysis #5068", "Temecula Dialysis Center #0883", "San Diego Acutes #3488", "Downey Dialysis Center #617", "Rosemead Springs Dialysis Center #1518", "Arcadia Oaks Dialysis", "Doctors Dialysis Center Of Montebello #335", "Bluff Rd Dialysis #5430", "Garfield Hemodialysis Center #613", "Monterey Park Dialysis Center #399", "Pasadena Foothills Dialysis #4329", "Eaton Canyon Dialysis #0331", "Covina Dialysis Center #0618", "Santa Fe Springs Dialysis #2260", "Whittier Dialysis #2003", "Alta Acutes #3736", "La County Acutes #3778", "Mobile Dialysis Acutes #3219", "Pomona Dialysis #3004", "Pomona Valley Dialysis #4344", "Pomona At Home #6326", "Fontana Dialysis #4005", "Ontario Dialysis #2124", "Rancho Cucamonga Ht At Home #5364", "San Bernardino Ht At Home #9648", "Mountain Vista Dialysis Center #882", "Citrus Valley At Home #6119 (#s See #2086)", "Colton Ranch Dialysis", "Highland Ranch Dialysis #2475", "Cathedral City #4456", "Cathedral City At Home #5900", "Corona Dialysis Center #0877", "Upland Colonies #5476", "Magnolia West Dialysis #2012", "Montclair Dialysis Center #0436 (#s Include #6158)", "Montclair At Home #6158 (#s See #436)", "Citrus Valley Dialysis #2086 (#s Include #6119)", "Upland Dialysis #3903", "Magnolia West At Home #6079", "Riverside Dialysis Center #0880", "Bermuda Dunes Dialysis #2495", "Palm Springs Dialysys #3067", "Victor Valley Dialysis #3009", "Chino Dialysis #3506", "Hesperia Dialysis Center #2278", "Mojave Sage Dialysis #5070", "Yucaipa Dialysis Center #2094", "Hi-Desert Dialysis #2568", "El Dorado Dialysis", "Avalon Dialysis", "Artesia Home At Home #5892 (#s Include #4369)", "Bellflower Dialysis Center #2138", "Carson Dialysis #5691", "Cerritos Dialysis #5788", "Gateway Plaza Dialysis #4320", "Iowa Street Dialysis #5794", "Downey Landing Dialysis Center #2218", "Banning Dialysis ", "Greater El Monte Dialysis Center #67", "South Cerritos Dialysis #2455", "Lakewood Dialysis Center #615", "Bixby Knolls Dialysis #2137", "Long Beach Harbor Dialysis #2140", "Nephron Dialysis #5792", "United Dialysis Center #438", "Firestone Blvd Dialysis #5153", "Norwalk Dialysis Center #672", "Paramount Dialysis Center #332", "Sfs Dialysis #5793", "Trc/Harbor-Ucla Mfi Total Renal Dialysis Center #697 ", "Anaheim Springs Dialysis #11161", "Anaheim West Dialysis #2485", "Anaheim Hills Dialysis #5789", "Anaheim Dialysis #4057", "Brea Dialysis Center #876", "Hoag Acutes #3723", "Orange County Acutes #3053", "Sb-Lb Acutes #3724", "Costa Mesa Dialysis #3614", "Fountain Valley Dialysis #5791", "Bastanchury Dialysis #5396", "Fullerton Dialysis #3058", "Crossroads Dialysis #2112", "Garden Grove Harbor At Home #9669", "Garden Grove Harbor Dialysis #2264", "Huntington Beach Dialysis #3059", "La Palma Dialysis #5790", "Saddleback Dialysis #4061", "Laguna Hills At Home #5829 (#s See #2079)", "Laguna Hills North #2079 (#s Include #5829)", "Los Alamitos Dialysis #2344", "Mission Viejo Dialysis #2564", "Mainplace Dialysis Center #884 (#s Include #5987)", "Main Place At Home #5987 (#s See #884)", "San Juan Capistrano South Dialysys #2560", "Santa Ana Dialysis Center #875", "Tustin Dialysis #2019", "Westminster South Dialysis #3545", "Encinitas Dialysis #3486", "Escondido Dialysis #3055", "College Dialysis #3559", "San Deigo South Dialysis #3210", "Carmel Mountain Dialysis #3569", "San Ysidro Dialysis #3456", "San Diego East Dialysis #3484", "San Marcos At Home #6381 (#s See #2261)", "San Marcos Dialysis Center #2261 (#s Include #6381)"];

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
  $("#id_position").on("click", function() {
    if($(this).val() == "Social Worker") {
        $("#social").css("display","block");
        $("#other").css("display","none");
    }
  });
  // Facilities
  $("#id_facility").on("click", function() {
    if($(this).val() != "Other Facility") {
        $('label[for=id_location]').css("display","none");
        $("#id_location").css("display","none");
        if($(this).val() == "DaVita") {
                $("#id_clinic_name").autocomplete({
                    source: davita
                 });  
        }
    } else {
        $('label[for=id_location]').css("display","inline");
        $("#id_location").css("display","inline"); 
    }
  });  
});
