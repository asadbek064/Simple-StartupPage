const sizeOfList = 20;
const sizeOfGroup = 4;
const sizeOfRow = 4;
const sizeOfColumn = 5;
const sizeOfTitle = 4;

const row1 = [1,6,11,16];
const row2 = [2,7,12,17];
const row3 = [3,8,13,18];
const row4 = [4,9,14,19];
const row5 = [5,10,15,20];

class LinkItem {
    constructor(urlLink, title, index) {
        this.urlLink = urlLink;
        this.title = title;
        this.faviconSrc = this.getFavicon(urlLink);
        this.index = index;
    }

    getFavicon(url) {
        return "https://www.google.com/s2/favicons?domain="+url;
    } 

    get Item() {
        let Item = {
            urlLink: this.urlLink,
            title: this.title,
            faviconSrc: this.faviconSrc,
            index: this.index,
        }
        return Item;
    }
}

class TitleItem { 
    constructor(title, index) {
        this.title = title;
        this.index = index;
    }

    get Title() {
        let Title = {
            title: this.title,
            index: this.index,
        }
        return Title;
    }
}

document.addEventListener('DOMContentLoaded', function() { 
    /* edit button state */
    document.getElementById("editButton").addEventListener("click", () => {
        openEditeView();
    });

    document.getElementById("saveButton").addEventListener("click", () => {
        saveEditeView();
    });

});

    function openEditeView() {
        console.log('open edit');
        document.getElementById("editView").style.display = "block";
        document.getElementById("editButton").style.display = "none";
        document.getElementById("saveButton").style.display = "block";
        populateEditView();
    }
  
    function saveEditeView() {
        document.getElementById("editView").style.display = "none";
        document.getElementById("editButton").style.display = "block";
        document.getElementById("saveButton").style.display = "none";
        updateLinkedList();
        
        var titleList = getLocalStorage("TITLE_LIST");
        var linkList = getLocalStorage("LINK_LIST")
        populatView(titleList, linkList);

    }
  
    function updateLinkedList() {
        var linkedList = [];
        var titleList = [];

        for (let i = 1; i < sizeOfList+1; i++) {
            var linkUrl = document.getElementById("urlLink"+i);
            var linkTitle = document.getElementById("title"+i);
            if (linkUrl != null && linkTitle != null) {
                if (linkUrl.value.length > 0) {
                        let tmp = new LinkItem(linkUrl.value, linkTitle.value, i).Item;
                        linkedList.push(tmp);
                    }
            }
        }
        savetoLocalStorage("LINK_LIST", linkedList);

        for (let i = 1; i < sizeOfTitle+1; i++) {
            var title = document.getElementById('rowTitle'+i);
            if (title != null) {
                if (title.value.length > 0) {
                    titleList.push(new TitleItem(title.value, i).Title);
                }
            }
        }
        savetoLocalStorage("TITLE_LIST", titleList);
        
    }


    function savetoLocalStorage(key ,list) {
        localStorage.setItem(key, JSON.stringify(list));
    }

    function getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    
    function populateEditView() {
        var linkedList = getLocalStorage("LINK_LIST");
        var titleList = getLocalStorage("TITLE_LIST");

         
            linkedList.forEach(element => {
                document.getElementById("urlLink"+element.index).value = element.urlLink;
                document.getElementById("title"+element.index).value = element.title;
            });
    
            titleList.forEach(element => {
                document.getElementById("rowTitle"+element.index).value = element.title;
            });
        }

    function populatView(title_list, link_list) {
        clear();
        /* populate group title */
        title_list.forEach(el => {
            document.getElementById("groupTitle"+el.index).innerText = el.title;
        });

        link_list.forEach(el => {

            if (row1.indexOf(el.index) !== -1) {
                appendTo("row1", el);
            } else if (row2.indexOf(el.index) !== -1) {
                appendTo("row2", el);
            } else if (row3.indexOf(el.index) !== -1) {
                appendTo("row3", el);
                console.log("row 3");
            } else if (row4.indexOf(el.index) !== -1) {
                appendTo("row4", el);
            } else if (row5.indexOf(el.index) !== -1) {
                appendTo("row5", el); 
            } 
        });
    }

    function appendTo(el, linkList_Item) {
        var selectedEl = document.getElementById(el);
        var template = `<a class="linkItems" href="${linkList_Item.urlLink}" target="_blank"><img src="${linkList_Item.faviconSrc}"/>&nbsp;${linkList_Item.title}</a>`;
        selectedEl.innerHTML += template;
    }

    function clear() {
        var template = `
        <li  id="row1">
        <h1 id="groupTitle1"></h1>
     </li>
     <li id="row2">
         <h1 id="groupTitle2"></h1>
     </li>
     <li id="row3">
         <h1 id="groupTitle3"></h1>
     </li>
     <li id="row4">
         <h1 id="groupTitle4"></h1>
     </li>`;

     document.getElementById("linkContainer").innerHTML = template;


      /* clear group title */
      for (let i = 1; i < sizeOfGroup+1; i++) {
        document.getElementById("groupTitle"+i).innerText = "";
    }

        
    }
