
                        function CreateStaff() {
                            var locus = document.getElementById("subjecty").value;
                            locus = locus.replaceAll(" ","");
                            if(locus == ""){
                                alert("Enter the Subject");
                                document.getElementById("subjecty").focus();
                            }else{
                                var subjecty = document.createElement("div");
                                subjecty.innerHTML = "SUBJECT: "+document.getElementById("subjecty").value;
                                document.getElementById("container").appendChild(subjecty);
                                document.getElementById("container").appendChild(document.createElement("br"));

                                var studentClass = document.createElement("div");
                                var studentClass1 = document.getElementById("studentClass").value;
                                studentClass.innerHTML = (document.getElementById("studentClass").value == "ALL" )? ("CLASS: pry"+" 1-5") : "CLASS: "+studentClass1; //value.slice(0,1) slice(-1); splict("-",1)
                                document.getElementById("container").appendChild(studentClass);
                                document.getElementById("container").appendChild(document.createElement("br"));
                                

                                var period = document.getElementById("period").value;
                                var periodAdd = document.createElement("div");
                                periodAdd.innerHTML = "PERIOD: "+period;
                                document.getElementById("container").appendChild(periodAdd);
                                document.getElementById("container").appendChild(document.createElement("br"));
                                document.getElementById("container").appendChild(document.createElement("br"));
                                document.getElementById('container').lastChild.scrollIntoView(false);

                                var subjectValue = document.getElementById("subjecty").value;

                                var period = document.getElementById("period").value;
                                for(var c = 1; c<=period; c++){
                                    
                                    function autoCreate(inputElement){
                                        var inputDay = Math.floor(Math.random()*5)+1;
                                        var inputPeriod = Math.floor(Math.random()*8)+1;
                                        var stateClass = document.getElementById("studentClass").value;
                                        var inputAddress = inputDay+stateClass+inputPeriod;
                                        var inputElement = document.getElementById(inputAddress);
                                        var subjectValue = document.getElementById("subjecty").value;
                                        var checked = inputDay+""+inputPeriod+subjectValue;
                                        var classic = inputDay+stateClass+subjectValue;
                                        classic = classic.replaceAll(' ','');
                                        checked = checked.replaceAll(' ','');
                                        
                                        if(stateClass == "ALL"){
                                            for(var r = 1; r<=5; r++){
                                                function autoCreate1(){
                                                    var inputDay1 = Math.floor(Math.random()*5)+1;
                                                    var inputPeriod1 = Math.floor(Math.random()*8)+1;
                                                    var stateClass1 = "pry"+r;
                                                    var inputAddress1 = inputDay1+stateClass1+inputPeriod1;
                                                    var inputElement1 = document.getElementById(inputAddress1);
                                                    var checked1 = inputDay1+""+inputPeriod1+subjectValue.replaceAll(' ','');
                                                    var classic1 = inputDay1+stateClass1+subjectValue.replaceAll(' ','');
                                                    if(document.getElementsByClassName(checked1).length >= 1 || document.getElementsByName(classic1).length >= 1 || inputElement1.value != ""){                                
                                                        autoCreate1(inputElement1);
                                                    }else{
                                                        inputElement1.value = subjectValue;
                                                        inputElement1.className = checked1;
                                                        inputElement1.name = classic1;
                                                        return;
                                                    }
                                                }
                                                autoCreate1();
                                            }
                                        }else{
                                            if(document.getElementsByClassName(checked).length >= 1 || document.getElementsByName(classic).length >= 1 || inputElement.value != ""){                                
                                                autoCreate(inputElement);
                                            }else{
                                                inputElement.value = subjectValue;
                                                inputElement.className = checked;
                                                inputElement.name = classic;
                                                return;
                                            }
                                        }
                                    }
                                    autoCreate();
                                    changeText();
                                }

                                document.getElementById("studentClass").selectedIndex = 0;
                                document.getElementById("period").value = "1";
                            }
                            
                        }
                        

                        function reset12() {
                            document.getElementById("studentClass").selectedIndex = 0;
                            document.getElementById("subjecty").value = "";
                            document.getElementById("period").selectedIndex = 0;
                        }

                        function update1() {
                            var spanner = document.getElementById("spanner");
                            var checkClash = document.getElementById("checkClash");
                                if(document.getElementById("subjectEdit").value.replaceAll(" ","") == ""){
                                    spanner.style.display = "block";
                                    spanner.innerText = "Enter the Subject";
                                    document.getElementById("subjectEdit").focus();
                                }
                                else{
                                    var hiddenField = document.getElementById("hiddenField").value;
                                    var stakeValue = document.getElementById(hiddenField);
                                    var dayValue = hiddenField.slice(0,1);
                                    var pedValue = hiddenField.slice(-1);
                                    var remain = hiddenField.slice(1,-1);
                                    var checker = dayValue+""+pedValue+document.getElementById("subjectEdit").value.replaceAll(' ','');
                                    const cChecker = document.getElementsByClassName(checker);
                                    if(cChecker.length >= 1 && checkClash.checked == true){
                                        spanner.style.display = "block";
                                        spanner.innerText = "Subject's period is clashing.";
                                        var count = 0;
                                        counter = setInterval(() => {
                                            count++
                                            if(count == 1 || count == 3){
                                                document.getElementById("modal1").style.border = "2px solid red";
                                            }
                                            else{
                                                if(count == 5){
                                                    clearTimeout(counter);
                                                }else{
                                                document.getElementById("modal1").style.border = "2px solid #005994";
                                                }
                                            }
                                        }, 300);
                                    }else{
                                            stakeValue.value = document.getElementById("subjectEdit").value;
                                            stakeValue.name = dayValue+remain+document.getElementById("subjectEdit").value.replaceAll(" ","");
                                            stakeValue.className = checker.replaceAll(" ","");
                                            document.getElementById("subjectEdit").value = "";
                                            spanner.innerText = "";
                                            modal.style.display = "none";
                                            changeText();
                                    }
                                }
                        }
                        
                        function cancel1() {
                                    modal.style.display = "none";
                                    document.getElementById("subjectEdit").value = "";
                                    document.getElementById("spanner").style.display = "none";
                                    document.getElementById("spanner").innerText = "";
                                }

                        function search1() {
                            var search = document.getElementById("search").value.replaceAll(" ","");
                            if(search != ""){
                                for(var i=1; i<=8; i++){
                                    for(var j=1; j<=5; j++){
                                        try {
                                            const textName = j+""+i+search.replaceAll(" ","");
                                            const textNodes = document.getElementsByClassName(textName);
                                            for(let r = 0; r < textNodes.length; r++){
                                                textNodes[r].style.backgroundColor = "rgb(250, 101, 37)";
                                            }
                                        }
                                        catch(err){
                                            //console.log("invalid element");
                                        }
                                    }
                                }
                            }else{
                                document.getElementById("search").focus();
                                document.getElementById("search").value = "";
                            }
                        }

                        function changeText(){
                            const nodes = document.querySelectorAll("textarea");
                            for(let r = 0; r < nodes.length; r++){
                                nodes[r].style.backgroundColor = "initial";
                            }
                        }

                        function filtaClass() {
                            var filta = document.getElementById("filterClass");
                            if(filta.value == ""){
                                for(var j = 1; j<=5; j++){
                                    for(let y = 0; y < document.getElementsByClassName("pry"+j).length; y++){
                                        document.getElementsByClassName("pry"+j)[y].style.display = "table-cell";
                                    }
                                    for(let lk = 0; lk < document.getElementsByClassName("dayTd").length; lk++){
                                        document.getElementsByClassName("dayTd")[lk].style.transform = "rotate(-75deg)";
                                    }
                                    for(let lka = 0; lka < document.getElementsByClassName("dayTd").length; lka++){
                                        document.getElementsByClassName("dayTd")[lka].style.fontSize = "22px";
                                    }
                                }
                            }else{
                                for(var k = 1; k<=5; k++){
                                    for(let y = 0; y < document.getElementsByClassName("pry"+k).length; y++){
                                        document.getElementsByClassName("pry"+k)[y].style.display = "none";
                                    }
                                }
                                for(let l = 0; l < document.getElementsByClassName(filta.value).length; l++){
                                    document.getElementsByClassName(filta.value)[l].style.display = "table-cell";
                                }
                                for(let lk = 0; lk < document.getElementsByClassName("dayTd").length; lk++){
                                    document.getElementsByClassName("dayTd")[lk].style.transform = "unset";
                                }
                                for(let lka = 0; lka < document.getElementsByClassName("dayTd").length; lka++){
                                    document.getElementsByClassName("dayTd")[lka].style.fontSize = "15px";
                                }
                            }
                        }