
export function SearchFilter() {

  function isArray(o) {
    return Object.prototype.toString.call(o) == '[object Array]';
  }

  function searchInString(initialString, stringOfItemsToSearch){
    var result = true;
    if(initialString && stringOfItemsToSearch) {
      var initialStr = initialString.toString().toUpperCase();
      var items = stringOfItemsToSearch.toString().toUpperCase().split(" ");

      items.forEach(function (item) {
        if (initialStr.search(item) == -1) {
          result = false;
        }
      });
    }
    return result;
  }


  var filtersExtra;
  return function(elements: any, text: any, filters: any, filter2: any) {
    var resultSearch = [];
    filtersExtra = filter2;
    text = (text) ? text : '';

    if(!isArray(elements)){
      return [];
    }

    if(filters && typeof filters == 'function') {
      filters(elements, text, function (result) {
        resultSearch = result;
      });
    }
    else if(filters && isArray(filters)){
      resultSearch  = elements.filter(function (item) {
        var result = false;
        for(var index =0; index<filters.length; index++){
          var currentFilter = filters[index];
          if(typeof currentFilter == 'string' && currentFilter.split('.').length > 0){
            var aa = '';
            currentFilter.split('.').forEach(function(currentFilter1){
              try {
                aa = (aa == '') ? item[currentFilter1] : aa[currentFilter1];
                aa = (aa) ? aa : '';
              }catch(e){
                aa = '';
              }
            });
            result = (aa != '' && searchInString(aa, text)) ? true : result;
          }else{
            result = (item[filters[index]] && searchInString(item[filters[index]], text)) ? true : result;
          }

          if(filters[index] && typeof filters[index] == 'object'){
            if(filters[index].values) {
              filters[index].values.forEach(function (value) {
                item[filters[index].name].filter(function (subItems) {
                  result = (searchInString(subItems[value], text)) ? true : result;
                });
              });
            }
            else{
              item[filters[index].name].filter(function (subItems) {
                result = (searchInString(subItems, text)) ? true : result;
              });
            }
          }

          if(result && isArray(filtersExtra)) {
            filtersExtra.forEach(function (filterExtra) {
              if(filterExtra.value) {
                result = (item[filterExtra.name] && item[filterExtra.name] == filterExtra.value) ? true : false;
              }
            });
          }

        }
        return result;
      });
    }
    else{
      return elements;
    }
    return resultSearch;
  }
}
