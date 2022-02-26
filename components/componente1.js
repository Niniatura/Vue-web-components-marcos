Vue.component('componente1', {
    template: //html
    `
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Array</th>
            <th scope="col">Boolean</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in array">
                <td>{{item}}</td>
                <td>{{boolean}}</td>
            </tr>
        </tbody>
    </table>
    `,
    props:['array','MyStyle','boolean']
})