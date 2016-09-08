
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('authors').insert({
          first_name: 'George',
          last_name: 'Orwell',
          biography: 'GEORGE ORWELL (1903-1950) was born in India and served with the Imperial Police in Burma...',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/217ZJ93nrQL._UX250_.jpg'
        }),
        knex('authors').insert({
          first_name: 'Malcolm',
          last_name: 'Gladwell',
          biography: 'Malcolm Gladwell has been a staff writer at The New Yorker since 1996. He is the author of The Tipping Point, Blink, Outliers...',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/61C9sHw2GxL._UX250_.jpg'
        }),
        knex('authors').insert({
          first_name: 'Robert',
          last_name: 'Pirsig',
          biography: 'Robert M. Pirsig was born in 1928 in Minneapolis, Minnesota. He holds degrees in chemistry, philosophy, and journalism and also studied...',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/61HsFDcib2L._UX250_.jpg'
        }),
        knex('authors').insert({
          first_name: 'Larry',
          last_name: 'McMurtry',
          biography: 'Larry McMurtry is the author of twenty-nine novels, including the Pulitzer Prize-winning Lonesome Dove. His other works include two collections of essays, three memoirs, and more than thirty screenplays, including the coauthorship of Brokeback Mountain, for which he received an Academy Award. His most recent novel, When the Light Goes, is available from Simon & Schuster. He lives in Archer City, Texas.',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/21LGP+-Tb+L._UX250_.jpg'
        }),
        knex('authors').insert({
          first_name: 'Adam',
          last_name: 'Rubin',
          biography: 'Adam Rubin is the New York Times best-selling author of seven critically-acclaimed picture books including Those Darn Squirrels, Secret Pizza Party, Dragons Love Tacos and Robo-Sauce. He spent ten years working as a creative director in the advertising industry before leaving his day job to write full time. Adam has a keen interest in improv comedy, camping and magic tricks. He lives in New York City.',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/81LYLlvUl6L._UX250_.jpg'
        }),
        knex('authors').insert({
          first_name: 'Daniel',
          last_name: 'Salmieri',
          biography: 'Daniel is a 2 time NYTimes bestselling illustrator from Brooklyn. His work has been recognized by The Society of Illustrators and American Illustration.',
          portrait_url: 'https://images-na.ssl-images-amazon.com/images/I/B1Ct8uPPHRS._UX250_.jpg'
        })
      ]);
    });
};
