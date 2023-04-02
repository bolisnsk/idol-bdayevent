class Routing extends React.Component {
    render() {
      return (
        <Router>
          <Routes>
            <Route path="/search/:word" element={<Search />} />
            </Routes>
        </Router>
      )
    }
}