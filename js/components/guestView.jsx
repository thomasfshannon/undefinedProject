var React = require('react');
var ReactDOM = require('react-dom');

var GuestView = React.createClass({
	render: function () {
		return(
			
			<div>
				<div id="GuestViewHeader">
					<h1>Guest View</h1>
				</div>

				<div id="guestViewLists">
					<h2>List for XXXXXXXX</h2>
					<ul>
					 	<li className="guestListLi"></li>
					</ul>
					<p>If you would like to make a pledge, please sign up for a free account:</p>
					<button id="signUpButton">Sign Up</button>
				</div>

			</div>
			)
		}
	
});



// module.exports = GuestView;

// var DetFundView = Backbone.Model.extend({
// 		initialize: function() {
// 			console.log("a new detfund has been created");
// 		}
		
// });
// var FundView = Backbone.Collection.extend({
// 	url: "https://afternoon-scrubland-9189.herokuapp.com/api/lists/"
// });
// var fundView = new FundView();
// fundView.fetch({
// 	success: function(resp) {
// 		console.log(resp.toJSON());
// 	},
// 	error: function(error) {
// 		console.log(err);
// 	}
// });
// var test = new FundView();
// test.set({
// 	'title': 'test',
// 	'user': 2,
	
// });