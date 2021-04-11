/*
    Author      : Veselin Ivanov
    Github      : github.com/ivanov1234159/JS-and-CSS
    Last Changed: 2021.04.11
*/
let tabs = (() => {
    reloadTabs();

    function reloadTabs() {
        let elements = document.getElementsByClassName('tab-link');
        for(let item of elements){
            if(!item.hasAttribute('tab-id')){
                continue;
            }
            let tab = document.getElementById(item.getAttribute('tab-id'));
            if(tab === undefined){
                continue;
            }
            item.addEventListener('click', function () {
                if(item.classList.contains('tab-link-disabled')){
                    return;
                }
                for(let _tab of tab.parentElement.getElementsByClassName('tab')){
                    _tab.classList.remove('tab-active');
                }
                tab.classList.add('tab-active');
                for(let _tab_link of item.parentElement.getElementsByClassName('tab-link')){
                    _tab_link.classList.remove('tab-link-active');
                }
                item.classList.add('tab-link-active');
            });
        }
    }

    function disableTabLink(tabId) {
        for(let item of document.getElementsByClassName('tab-link')){
            if(item.getAttribute('tab-id') !== tabId){
                continue;
            }
            item.classList.add('tab-link-disabled');
        }
    }
    
    function enableTabLink(tabId) {
        for(let item of document.getElementsByClassName('tab-link')){
            if(item.getAttribute('tab-id') !== tabId){
                continue;
            }
            item.classList.remove('tab-link-disabled');
        }
    }

    return {
        disableTabLink,
        enableTabLink,
        reloadTabs
    };
})();
