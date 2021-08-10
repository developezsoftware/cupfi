const homelist = (req, res) => {
    res.render('locations-list',
                    {   title: 'Cupfi - Find great coffe and wifi location',
                        pageHeader: {
                        title:'Cupfi',
                        strapline: 'Find Coffe shops to work in with great wifi'
                        },
                        locations: [{
                            name : 'Yaniras Cafe',
                            address: '125 High Street, Reading RG6 1PS',
                            rating: 5,                           
                            facilities: ['Hot drinks', 'Food', 'Premium Wifi'],
                            distance: '100m'
                        },
                        {
                            name: 'Tatte',
                            address: '4032 High Street, Brookline, RG6 1PS',
                            rating: 4,
                            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                            distance: '200m'
                        },
                        {
                            name: 'Cafe Hero',
                            address: '125 High Street, Reading, RG6 1PS',
                            rating: 2,
                            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                            distance: '200m'
                        }]
                });
}

const locationInfo = (req, res) => {
    res.render('location-info', { 
                title: 'Yaniras Cafe',
                pageHeader: {title: 'Yaniras Cafe'},
                sidebar: {
                    context: 'on cupfi for its accesible wifi and great place to work with laptop',
                    callToAction: 'Please leave a review if you\'ve been here '
                },
                location: {
                    name: 'Yaniras Cafe',
                    address: '777 High Rd, Reading',
                    rating: 4,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    coords: {lat: 51.455041, lng: -0.9690884},
                    openingTimes:[{
                        days: 'Monday - Friday', 
                        opening: '7:00am', 
                        closing: '7:00pm', 
                        closed: false
                    },{
                        days: 'Saturday',
                        opening: '8:00am',
                        closing: '5:00pm',
                        closed: false
                    },{
                        days: 'Sunday',
                        closed: true
                    }],
                    reviews: [{
                        author: 'John Hops',
                        rating: 5,
                        timestamp: '16 August 2015',
                        reviewText: 'Great place. Coffe and wifi are great'
                    },{
                        author: 'Will Witt',
                        rating: 4,
                        timestamp: '16 June 2013',
                        reviewText: 'It was alright, Coffe wasn\'nt so good'
                    }]
                }
            });
}

const addReview = (req, res) => {
    res.render('location-review-form', { 
            title: 'Add review',
            pageHeader: {title: 'Add review'} 
    });
}

module.exports = {
    homelist,
    locationInfo,
    addReview
};