document.addEventListener('DOMContentLoaded', function () {
    var adElements = document.getElementsByClassName('adSpace');
    for (var i = 0; i < adElements.length; ++i) {
        populateAdSpace(adElements[i])
    }

    sliderLifespanFunc()
    sliderDogFriendlyFunc()
    sliderAffectionLevelFunc()
    sliderSheddingLevelFunc()

    filterByRequierments()
});

function populateAdSpace(htmlSnippet) {
    fetch("https://api.thecatapi.com/v1/images/search?limit=1")
        .then(res => res.json())
        .then(result => {
            htmlSnippet.src = result[0].url
            htmlSnippet.alt = result[0].id
        })
        .catch(err => console.log(err))
}

function filterByRequierments() {
    fetch("https://api.thecatapi.com/v1/breeds")
        .then(res => res.json())
        .then(result => {
            var value = document.getElementById("slider_lifespan").value
            result = filterArrayByLifespan(result, value);
            
            value = document.getElementById("slider_dog_friendly").value
            result = filterArrayByPropertyValue(result, "dog_friendly", value)
            
            value = document.getElementById("slider_affection_level").value
            result = filterArrayByPropertyValue(result, "affection_level", value)
            
            value = document.getElementById("checkbox_rare").checked
            result = filterArrayByPropertyValue(result, "rare", +value, true)
            
            value = document.getElementById("checkbox_indoor").checked
            result = filterArrayByPropertyValue(result, "indoor", +value, true)

            value = document.getElementById("slider_shedding_level").value
            result = filterArrayByPropertyValue(result, "shedding_level", value, false, false)

            value = document.getElementById("checkbox_hairless").checked
            result = filterArrayByPropertyValue(result, "hairless", +value, true)

            var textBoxElement = document.getElementById("text_filterResult")
            var text =  "<h3>Matching cat breeds ("+result.length+"): </h3><ul>"
            for (var i = 0; i < result.length; ++i) {
                text += "<li>" + result[i].name + "</li>"
            }
            text += "</ul>"
            textBoxElement.innerHTML = text
            console.log(result)
        })
        .catch(err => console.log(err))
}

function filterArrayByLifespan(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
        var ranges = array[i].life_span.split("-") 
        if (parseInt(ranges[1]) < value) {
            array.splice(i,1);
        }
    }
    return array
}

function filterArrayByPropertyValue(array, property, value, exactValue = false, greaterOrEqual = true) {
    array = array.filter(function( obj ) {
        if (exactValue) {
            return obj[property] == value;
        } else if (greaterOrEqual) {
            return obj[property] >= value;
        } 
        return obj[property] <= value;
    });
    return array;
}

function checkboxHairlessFunc() {
    var val = document.getElementById("checkbox_hairless").checked
    document.getElementById("slider_shedding_level").disabled = val
}

function sliderLifespanFunc() {
    var val = document.getElementById("slider_lifespan").value
    document.getElementById('sliderVal_lifespan').innerHTML = val
}

function sliderDogFriendlyFunc() {
    var val = document.getElementById("slider_dog_friendly").value
    document.getElementById('sliderVal_dog_friendly').innerHTML = val
}

function sliderAffectionLevelFunc() {
    var val = document.getElementById("slider_affection_level").value
    document.getElementById('sliderVal_affection_level').innerHTML = val
}

function sliderSheddingLevelFunc() {
    var val = document.getElementById("slider_shedding_level").value
    document.getElementById('sliderVal_shedding_level').innerHTML = val
}