/** @jsx React.DOM */

var SearchForm = React.createClass({
  render: function() {
    return (
      <div>
        Search:
        <input type="text"/>
        Sort by:
        <select >
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </div>
    )
  }
});

module.exports = SearchForm;
