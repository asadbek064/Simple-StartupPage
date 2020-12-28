const sizeOfList = 20;
const sizeOfGroup = 4;
const sizeOfRow = 4;
const sizeOfColumn = 5;
const sizeOfTitle = 4;

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


/* edit button state */
    function openEditeView() {
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

    function getLinkedList(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    
    function populateEditView() {
        var linkedList = getLinkedList("LINK_LIST");
        var titleList = getLinkedList("TITLE_LIST");

        linkedList.forEach(element => {
            document.getElementById("urlLink"+element.index).value = element.urlLink;
            document.getElementById("title"+element.index).value = element.title;
        });

        titleList.forEach(element => {
            document.getElementById("rowTitle"+element.index).value = element.title;
        });
    }