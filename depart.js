
    var headt = document.createElement("tr");
        headt.id = "headt";
        document.getElementById("departTable").appendChild(headt);

        var dayTh = document.createElement("th");
        dayTh.innerHTML ="Day";
            document.getElementById("headt").appendChild(dayTh);

            var classTh = document.createElement("th");
            classTh.innerHTML ="Class";
            document.getElementById("headt").appendChild(classTh);

    for(var i=1; i<=9; i++){ 
        let res = (i>5)? (i-1) : i;
        if(i==6){
            var sBreak = document.createElement("th");
            sBreak.innerHTML ="Break";
            document.getElementById("headt").appendChild(sBreak);
            continue;
        }
         var tableTh =  document.createElement("th");
         tableTh.innerHTML = res;
         document.getElementById("headt").appendChild(tableTh);
         
    }
    //element.replaceChildren(element.firstChild, element.lastChild); 
    for(var wDay=1; wDay<=5; wDay++){
        var dayTr = document.createElement("tr");
        dayTr.id = getDayOfWeek(wDay);
        document.getElementById("departTable").appendChild(dayTr);
        
        
        var dayTd = document.createElement("td");
        dayTd.innerHTML = getDayOfWeek(wDay);
        dayTd.className = "dayTd";
        document.getElementById(getDayOfWeek(wDay)).appendChild(dayTd);
        
        //class table data
        var classTd = document.createElement("td");
        classTd.innerHTML = "";
        classTd.id = "class" + getDayOfWeek(wDay);
        document.getElementById(getDayOfWeek(wDay)).appendChild(classTd);
        
        var classTable = document.createElement("table");
        classTable.id = "classTable" + getDayOfWeek(wDay);
        document.getElementById("class" + getDayOfWeek(wDay)).appendChild(classTable);
        //if else statement of class's depart and arms goes here
                  
        for(js = 1; js<=5; js++){
            var classTr = document.createElement("tr");
            classTr.id = "pry"+js;
            document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(classTr);

        var jsTd = document.createElement("td");
            jsTd.innerHTML = "PRIMARY " + js;
            jsTd.className = "class "+"pry"+js;
            document.getElementById("classTable" + getDayOfWeek(wDay)).appendChild(jsTd);
            }
            //period time section start
        for(var i=1; i<=9; i++){
            let res = (i>5)? (i-1) : i;
            if(i==6){
    
                var periodTd = document.createElement("td");
                periodTd.innerHTML = "";
                periodTd.id = "breaks" + getDayOfWeek(wDay);
                periodTd.className = "breaks";
                document.getElementById(getDayOfWeek(wDay)).appendChild(periodTd);
                continue;
            }
            var periodTd = document.createElement("td");
            periodTd.innerHTML = "";
            periodTd.id = "periods" + getDayOfWeek(wDay)+i;
            document.getElementById(getDayOfWeek(wDay)).appendChild(periodTd);
            
            var periodTable = document.createElement("table");
            periodTable.id = "periodTable" + getDayOfWeek(wDay)+i;
            document.getElementById("periods" + getDayOfWeek(wDay)+i).appendChild(periodTable);
            
            var checkClash = document.getElementById("checkClash");
    
            for(js = 1; js<=5; js++){ 
                    var classTr = document.createElement("tr");
                    classTr.id = "period"+js;
                    document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(classTr);
    
                    var jsTd = document.createElement("td");
                    jsTd.id = "td"+wDay+"pry"+js+res;
                    jsTd.className = "pry"+js;
                    document.getElementById("periodTable" + getDayOfWeek(wDay)+i).appendChild(jsTd);
                    //textarea as table data
                    var tdInput = document.createElement("textarea");
                    tdInput.id = wDay+"pry"+js+res;
                    tdInput.readOnly = true;
                    tdInput.row = 2;
                    tdInput.addEventListener("click", function()  {
                        var modal = document.getElementById("modal");
                        modal.style.display = "block";
                        document.getElementById("hiddenField").value = this.id;
                        checkClash.checked = true;
                        
                        var periodEdit = document.getElementById("periodEdit");
                        var classEdit = document.getElementById("classEdit");
                        var dayEdit = document.getElementById("dayEdit");
                        document.getElementById("subjectEdit").focus();
                        var pos;
                        if(res == 1){
                            pos = "st";
                        }else{
                            if(res == 2){
                                pos = "nd";
                            }else{
                                if(res == 3){
                                    pos = "rd";
                                }else{
                                    pos = "th";
                                }
                            }
                        }
                        periodEdit.innerText = res;
                        classEdit.innerText = "PRIMARY "+this.id.slice(1,-1).slice(-1);
                        dayEdit.innerText = getDayOfWeek(this.id.slice(0,1));
                        document.getElementById("pos").innerText = pos;

                    }, false);
                    document.getElementById(jsTd.id).appendChild(tdInput);
            }

        }
        //period time section end
    }