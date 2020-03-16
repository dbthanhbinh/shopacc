import _ from 'lodash'
const checkIsNotNullOrEmpry = (str) => {
    if (_.isNull(str) || _.isEmpty(str)) {
        return true
    } else {
        return false
    }
}

export {
    checkIsNotNullOrEmpry
}