/*
    Author      : Veselin Ivanov
    Github      : github.com/ivanov1234159/JS-and-CSS
    Last Changed: 2021.04.11
*/
/*          REQUIRED                ==>             OPTIONAL
#someID.modal                       ==> .modal-link-disabled, .modal-active
.modal-link[modal-id]               ==> .modal-link-disabled
#someID.modal .modal-link-close     ==> .modal-link-disabled
#someID.modal .modal-link-close-x   ==> .modal-link-disabled
*/
let modal = (() => {
    
    for(let modalBox of document.getElementsByClassName('modal')){
        if(!modalBox.hasAttribute('id')){
            continue;
        }
        modalBox.addEventListener('click', function(ev){
            if(modalBox.classList.contains('modal-link-disabled')){
                return;
            }
            if(ev.target == modalBox){
                modalBox.classList.remove('modal-active');
            }
        });
    }

    for(let item of document.getElementsByClassName('modal-link')){
        if(!item.hasAttribute('modal-id')){
            continue;
        }
        let modalBox = document.getElementById(item.getAttribute('modal-id'));
        if(modalBox === undefined || !modalBox.classList.contains('modal')){
            continue;
        }
        item.addEventListener('click', function () {
            if(item.classList.contains('modal-link-disabled') 
                || item.classList.contains('modal-link-close')
                || item.classList.contains('modal-link-close-x')){
                return;
            }
            modalBox.classList.add('modal-active');
        });
    }

    for(let element of [document.getElementsByClassName('modal-link-close'), 
        document.getElementsByClassName('modal-link-close-x')]){
        for(let item of element){
            item.addEventListener('click', function(){
                if(item.classList.contains('modal-link-disabled')){
                    return;
                }
                for(let current = item.parentElement; current.nodeName.toLowerCase() != "body"; 
                    current = current.parentElement){
                    if(current.classList.contains('modal')){
                        current.classList.remove('modal-active');
                        break;
                    }
                }
            });
        }
    }

    function disableLink(modalId) {
        for(let item of document.getElementsByClassName('modal-link')){
            if(!item.hasAttribute('modal-id') || item.getAttribute('modal-id') !== modalId 
                || !item.classList.contains('modal-link')){
                continue;
            }
            item.classList.add('modal-link-disabled');
        }
    }
    
    function enableLink(modalId) {
        for(let item of document.getElementsByClassName('modal-link')){
            if(!item.hasAttribute('modal-id') || item.getAttribute('modal-id') !== modalId 
                || !item.classList.contains('modal-link')){
                continue;
            }
            item.classList.remove('modal-link-disabled');
        }
    }

    function open(modalId){
        let modal = document.getElementById(modalId);
        if(modal !== undefined && modal.classList.contains('modal') 
            && !modal.classList.contains('modal-active')){
            modal.classList.add('modal-active');
        }
    }

    return {
        disableLink,
        enableLink,
        open
    };
})();
