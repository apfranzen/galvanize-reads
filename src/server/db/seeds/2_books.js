
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('books').insert({
          title: '1984',
          genre: 'Fiction Classic',
          description: 'Written in 1948, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, Orwell’s narrative is timelier than ever. 1984 presents a startling and haunting vision of the world...',
          cover_url: 'https://images-na.ssl-images-amazon.com/images/I/31BJ1bAJUGL._SX310_BO1,204,203,200_.jpg'
        }),
        knex('books').insert({
          title: 'Outliers: The Story of Success',
          genre: 'Statistics',
          description: 'In this stunning new book, Malcolm Gladwell takes us on an intellectual journey through the world of "outliers"--the best and the brightest, the most famous and the most successful. He asks the question: what makes high-achievers different?',
          cover_url: 'https://images-na.ssl-images-amazon.com/images/I/41h5QL0vVEL._SX327_BO1,204,203,200_.jpg'
        }),
        knex('books').insert({
          title: 'Animal Farm',
          genre: 'Fiction Contemporary',
          description: 'Animal Farm is the most famous by far of all twentieth-century political allegories. Its account of a group of barnyard animals who revolt against their vicious human master, only to submit to a tyranny erected...',
          cover_url: 'https://images-na.ssl-images-amazon.com/images/I/314agQyvEQL._SX303_BO1,204,203,200_.jpg'
        }),
        knex('books').insert({
          title: 'David and Goliath: Underdogs, Misfits, and the Art of Battling Giants',
          genre: 'Applied Psychology',
          description: 'Three thousand years ago on a battlefield in ancient Palestine, a shepherd boy felled a mighty warrior with nothing more than a pebble...',
          cover_url: 'https://images-na.ssl-images-amazon.com/images/I/314agQyvEQL._SX303_BO1,204,203,200_.jpg'
        }),
        knex('books').insert({
          title: 'Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values',
          genre: 'Philosophy',
          description: 'One of the most important and influential books written in the past half-century, Robert M. Pirsigs Zen and the Art of Motorcycle Maintenance is a powerful, moving, and penetrating examination of how we live .',
          cover_url: 'https://images-na.ssl-images-amazon.com/images/I/41vxAMcHOzL._SX307_BO1,204,203,200_.jpg'
        }),
        knex('books').insert({
          title: 'Lonesome Dove',
          genre: 'Westerns',
          description: 'A love story, an adventure, and an epic of the frontier, Larry McMurtry’s Pulitzer Prize— winning classic, Lonesome Dove, the third book in the Lonesome Dove tetralogy, is the grandest novel ever written about the last defiant wilderness of America.',
          cover_url: 'https://images-na.ssl-images-amazon.com/images/I/51648G4EeqL._SX327_BO1,204,203,200_.jpg'
        }),
        knex('books').insert({
          title: 'Dragons Love Tacos',
          genre: 'Childrens',
          description: 'Dragons love tacos. They love chicken tacos, beef tacos, great big tacos, and teeny tiny tacos. So if you want to lure a bunch of dragons to your party, you should definitely serve tacos. Buckets and buckets of tacos. Unfortunately, where there are tacos, there is also salsa. And if a dragon accidentally eats spicy salsa . . . oh, boy. Youre in red-hot trouble.',
          cover_url: 'https://images-na.ssl-images-amazon.com/images/I/61x5f9BhBDL._SY497_BO1,204,203,200_.jpg'
        })
      ]);
    });
};
