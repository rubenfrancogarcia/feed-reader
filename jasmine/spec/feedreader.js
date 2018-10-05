

$(function() {

    //this tests the RSS feed expectaion via several test components .
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url are defined', function() {
           for(let feed of allFeeds){
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          }

         });

         it('has a name', function(){
           for(let feed of allFeeds){
           expect(feed.name).toBeDefined();
           expect(feed.name.length).not.toBe(0);
         }
         });
    });
    // this test the menu default status to check as intented
    //by running 2 tests 
    describe("The Menu", function (){

      it('is hidden by default', function() {
        const body = document.querySelector('body');
        expect(body.classList.contains('menu-hidden')).toBe(true);
        //why won't the code in line 62 not work?
        //expect($('body').contains('menu-hidden')).toBe(True);
        //i got the syntax from a cheatsheet provided via udacity resource
      });

      it('changes when clicked', function(){

        const body = document.querySelector('body');
        const menu = document.querySelector('.menu-icon-link');

        menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(false);

        menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);

      });
    });
    describe('Initial Entries', function (){

      beforeEach(function(done){
        loadFeed(0, done);
      });

      it("load the complete feed", function(){
          const feed = document.querySelector('.feed');
          expect(feed.children.length > 0).toBe(true);
          //why don't this one below work?
          //expect(feed.hasChildNodes).toBe(true);

      });
    });
    describe('New Feed Selectoin', function(){
      const feed = document.querySelector('.feed');
      const feed1 = [];
      const feed2 = [];

      beforeEach(function(done){
        loadFeed(0);
        Array.from(feed.children).forEach(function(entry){
          feed1.push(entry.innerText);
        });
        loadFeed(1, done);
      });

      it("feed changes", function(){
        Array.from(feed.children).forEach(function(entry){
          feed2.push(entry.innerText);

      expect(feed2 === feed1).toBe(false);
        });
      });
    });
}());
