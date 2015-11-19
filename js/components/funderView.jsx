var React = require('react');
var ReactDOM = require('react-dom');

var FunderView = React.createClass({
	render: function () {
		return(
			
			<div>
				<div id="funderViewHeader">
					<h1>Funder View</h1>
					<h2>Available Items for Pledges</h2>
				</div>

				<div id="funderViewLists">
					<h2>List for XXXXXXXX</h2>
					<ul>
					 	<li className="funderListLi"></li>
					</ul>
					<p>If you would like to make a pledge, please click on the item box.</p>
				</div>

			</div>
			)
		}
	
});

module.exports = FunderView;



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