class ArtGallery {
    constructor(creator){
        this.creator = this.creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity){
        if(!Object.keys(this.possibleArticles).includes(articleModel.toLowerCase())){
            throw new Error("This article model is not included in this gallery!");
        }

        if(this.listOfArticles.includes(articleName) && this.listOfArticles.includes(articleModel)){
            this.listOfArticles.quantity += quantity;
        }else {
            articleModel = articleModel.toLowerCase();
            this.listOfArticles.push({articleModel,articleName,quantity});
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest ( guestName, personality){
        for(let item of this.guests){
            for(let i in item){
                if(item[i] == guestName){
                    throw new Error(`${guestName} has already been invited.`)
                }
            }
        }
        
        if(personality == 'Vip'){
            this.guests.push({guestName, points: 500, purchaseArticle: 0});
        }else if(personality == 'Middle'){
            this.guests.push({guestName, points: 250, purchaseArticle: 0});
        }else{
            this.guests.push({guestName, points: 50, purchaseArticle: 0});
        }
        const dsds = Object.values(Object.values(this.guests));
        
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle ( articleModel, articleName, guestName){
        for(let item of this.listOfArticles){
            if(item.hasOwnProperty(articleName) || item.hasOwnProperty(articleModel)){
                throw new Error('This article is not found.')
            }else if(item.quantity == 0){
                return `The ${articleName} is not available.`;
            }
        }

        for(let it of this.guests){
            if(it.hasOwnProperty(guestName)){
                return `This guest is not invited.`;
            }else if(it.hasOwnProperty('guestName')){
                if(it.points >= this.possibleArticles[articleModel]){
                    it.points -= this.possibleArticles[articleModel];
                    it.purchaseArticle += 1

                    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
                }else{
                    return `You need to more points to purchase the article.`;
                }
            }
        }
    }

    showGalleryInfo (criteria){

        if(criteria == 'article'){
            let result = '';
            result += 'Articles information:\n';

            for(let item of this.listOfArticles){
                result += `${item.articleModel} - ${item.articleName} - ${item.quantity}\n`;
            }

            return result;
        }else if(criteria == 'guest'){
            let result = '';
            result += 'Guests information:\n';

            for(let item of this.guests){
                result += `${item.guestName} - ${item.purchaseArticle}\n`;
            }

            return result;
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



