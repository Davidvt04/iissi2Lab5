import { get } from './helpers/ApiRequestsHelper'
function getAll () {
  return get('/users/myRestaurants')
}

function getDetail (id) {
  return get('/restaurants/' + id)
}

export { getAll, getDetail }
