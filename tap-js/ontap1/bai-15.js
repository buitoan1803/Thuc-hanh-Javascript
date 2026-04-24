 const sports = [
    {
        name: 'Bóng rổ',
        like: 6,
        getPrice: function(){
            return this.like * 1000;
        }
    },
    {
        name: 'Bơi lội',
        like: 5,
        getPrice: function(){
            return this.like * 2000;
        }
    },
    {
        name: 'Bóng đá',
        like: 10,
        getPrice: function(){
            return this.like * 3000;
        }
    },
]


function getMostFavoriteSport(sports){
    const total = sports.reduce((total, price) => total + price.getPrice(), 0);
    return total;
}         

console.log(getMostFavoriteSport(sports))
