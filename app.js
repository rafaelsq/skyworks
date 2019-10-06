const state = {
    count: 0,
};

const actions = {
    down: value => state => ({count: state.count - value}),
    up: value => state => ({count: state.count + value}),
};

const view = (state, actions) => 
    h('div', {className: 'container is-fluid'}, 
        h('nav', {className:'level'},
            h('div', {className:'level-left'},
                h('div', {className:'level-item'},
                    h('p', {className:'subtitle is-5'}, h('strong', {}, 'Sky'), 'Works'),
                ),
            ),
            h('div', {className:'level-right'},
                h('p', {className:'level-item'},
                    h('span', {className:'icon',id:'div'}, h('i', {className:'fas fa-vector-square'})),
                ),
                h('div', {className:'level-item'},
                    h('div', {className:'file'},
                        h('input',{className:'file-input',id:'file',type:'file', name:'resume'}),
                        h('span', {className:'icon'}, h('i', {className:'fas fa-upload'})),
                    ),
                ),
                h('p', {className:'level-item'}, h('span', {className:'icon',id:'text'}, h('i',{className:'fas fa-font'}))),
                h('p', {className:'level-item'}, h('span', {className:'icon has-text-info',id:'download'}, h('i',{className:'fas fa-save'}))),
            ),
        ),
        h('div', {className:'columns'},
            h('aside', {className:'menu column is-one-fifth'}, 
                h('p', {className:'menu-label'}, 'Layers'),
                h('ul',{className:'menu-list', id:'layers'}),
            ),
            h('div', {className:'column'},h('div', {className:'cnt',id:'cnt'})),
        ),
    );


app(state, actions, view, document.body);
