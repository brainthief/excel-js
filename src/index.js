import { Excel } from '@/components/excel/Excel'
import './scss/index.scss'
import { Header } from '@/components/header/header'
import { Toolbar } from '@/components/toolbar/toolbar'
import { Formula } from '@/components/formula/formula'
import { Table } from '@/components/table/table'

const excel = new Excel('#app', {
 components: [Header, Toolbar, Formula, Table],
})

excel.render()
