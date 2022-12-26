import API from './API'


export default {
    getItems() {
        return API().get('/2/item')
    },

    saveItem(data) {
        return API().post('/2/item',data)
    },
    updateItem(data) {
        return API().put('/2/item/' + data.id,data)
    },
    deleteItem(item) {
        return API().delete('/2/item/' + item.id,)
    }
    
    
}