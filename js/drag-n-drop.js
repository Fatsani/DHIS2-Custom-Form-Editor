
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    var dataElement = getDataElement(ev.target.id);
    ev.dataTransfer.setData("text/html", "<textarea><strong>"+dataElement.name+
    "</strong><i>"+dataElement.id+"</i> </textarea>");
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    ev.target.appendChild(document.getElementById(data));
  }

  function getDataElement (id){
    var data = {}
    //iterate through array
    dSet.dataSetElements.forEach(dataEl => {
        if (dataEl.dataElement.id  == id){
            data = {
                name: dataEl.dataElement.name,
                id: id
            }
        }
    });
    return data;

}
//dataset
const dSet = {
    "name":"Test Dataset",
    "dataSetElements":[{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"Last Inconcl",
        "id":"Dw1COaHvddP",
        "shortName":"Last Inconcl"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"Last Pos",
        "id":"cTz3qqIgFK8",
        "shortName":"Last Pos"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"New Neg",
        "id":"iF9EDvPaBak",
        "shortName":"New Neg"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"Last Neg",
        "id":"pxGlrBgCfwu",
        "shortName":"Last Neg"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"New Pos",
        "id":"Gzg2XAmTL3N",
        "shortName":"New Pos"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"Test 1&2 Disc",
        "id":"EhxKyEkibzR",
        "shortName":"Test 1&2 Disc"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"D: 25+ yrs",
        "id":"jO8TclVXNfG",
        "shortName":"D: 25+ yrs"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"FP",
        "id":"NhXxK0GPOML",
        "shortName":"FP"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"Test 1&2 Pos",
        "id":"sni7L2UZTlH",
        "shortName":"Test 1&2 Pos"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"Confirmat Inc",
        "id":"z0VrpJspY1A",
        "shortName":"Confirmat Inc"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"FRS",
        "id":"Xv8wuXd3N1B",
        "shortName":"FRS"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"FNP",
        "id":"Cl4cWpvxic9",
        "shortName":"FNP"
      }
    },{
      "categoryCombo":{
        "name":"LocationMonth",
        "id":"ttDHReecn57"
      },
      "dataElement":{
        "name":"C: 15-24 yrs",
        "id":"yrPjtpLh4pV",
        "shortName":"C: 15-24 yrs"
      }
    },{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"New Exp Inf","id":"mMdmvoehZPa","shortName":"New Exp Inf"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"Last Exp Inf","id":"b6mmXAYlHmO","shortName":"Last Exp Inf"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"M","id":"LEtHIH62hsq","shortName":"M"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"Never Tested","id":"DaWO5AGy2Sb","shortName":"Never Tested"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"Test 1&2 Neg","id":"xJdYSCbZSDy","shortName":"Test 1&2 Neg"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"Single Pos","id":"NtL8y8rboqH","shortName":"Single Pos"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"Confirmat Pos","id":"I82Ayif8hI4","shortName":"Confirmat Pos"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"New Inconcl","id":"epGZUKnMBLZ","shortName":"New Inconcl"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"B: 1-14 yrs","id":"m4UzaNSAK1o","shortName":"B: 1-14 yrs","formName":"B: 1-14 yrs"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"PITC","id":"dsbdlWZsj0P","shortName":"PITC"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"A: 0-11 m","id":"CtvH4d4nXEd","shortName":"A: 0-11 m","formName":"0-11 m"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"Other","id":"z8lRXI2a9C8","shortName":"Other"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"Present","id":"zF2nN5YXSyQ","shortName":"Present"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"Not Present","id":"DykSVwljV3b","shortName":"Not Present"}},{"categoryCombo":{"name":"LocationMonth","id":"ttDHReecn57"},"dataElement":{"name":"Single Neg","id":"bJPVZIc0kDd","shortName":"Single Neg"}}]}