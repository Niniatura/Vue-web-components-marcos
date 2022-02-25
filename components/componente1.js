Vue.component('componente1', {
    template: //html
    `
    <table>
        <tr v-for="(item, i) in array">
            <td>{{item}}</td>
            <td>{{boolean}}</td>
        </tr>
    </table>
    `,
    props:['array','style','boolean']
})