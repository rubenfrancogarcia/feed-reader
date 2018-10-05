

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
          const entry_feed = $(".feed .entry");
          expect(entry_feed.children.length > 0).toBe(true);
      });
    });

    describe('New Feed Selectoin', function(){
    let defaultFeed;
    //why if I do not declare the variable here does it give me an error if I define the variable below?


      beforeEach(function(done){
        loadFeed(0, function(){
          let defaultFeed = $(".feed .entry").html();
          loadFeed(1,function() {
            done();
          });
        });
      });

      it("feed changes", function(done){
        let newFeed = $(".feed .entry").html();
        expect(newFeed).not.toBe(defaultFeed);
        done();

        //why do I need to call done here as well if we called it in the beforeEach statement above.
        });
      });

}());
