<template>
  <q-layout view="hHh lPr fFf">
    <q-header elevated height-hint="55">
      <q-toolbar class="q-py-sm q-px-md">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu"/>
        <q-toolbar-title>
          <q-img width="150px" src="../assets/cloudware-logo.png"/>
        </q-toolbar-title>
        <q-space/>

        <q-btn
          v-if="$q.screen.gt.xs"
          @click="$router.currentRoute.path !== '/stock-report' ? $router.push({path: '/stock-report'}) : ''"
          dense flat round size="md" icon="notifications">
          <q-badge v-show="getLittleStock.length + getEmptyStock.length > 0" color="red" floating>
            {{getLittleStock.length + getEmptyStock.length}}
          </q-badge>
        </q-btn>

        <q-btn-dropdown
          icon="account_circle"
          flat
        >
          <div class="row no-wrap q-pa-md">

            <div class="column items-center">
              <q-avatar size="72px">
                <q-img src="https://cdn.quasar.dev/img/boy-avatar.png"/>
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">{{$store.state.auth.user.name}}</div>
              <div class="q-mb-xs">{{$store.state.auth.user.email}}</div>

              <q-btn
                @click="logout"
                color="primary"
                label="Logout"
                push
                size="sm"
                v-close-popup
              />
            </div>
          </div>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="250"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item to="/cashiers" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-file-invoice-dollar"/>
            </q-item-section>
            <q-item-section>
              កន្លែងគិតលុយ
            </q-item-section>
          </q-item><q-item to="/" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="home"/>
            </q-item-section>
            <q-item-section>
              ទំព័រដើម
            </q-item-section>
          </q-item>
          <q-item to="/product" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-boxes"/>
            </q-item-section>
            <q-item-section>
              ទំនិញ
            </q-item-section>
          </q-item>
          <q-item to="/stock" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-warehouse"/>
            </q-item-section>
            <q-item-section>
              ស្តុកទំនិញ
            </q-item-section>
          </q-item>
          <q-item to="/sale" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-cart-plus"/>
            </q-item-section>
            <q-item-section>
              គ្រូពេទ្យចេញថ្នាំ
            </q-item-section>
          </q-item>
          <q-item to="/staff" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-user-nurse"/>
            </q-item-section>
            <q-item-section>
              បុគ្គលិក
            </q-item-section>
          </q-item>
          <q-item to="/patient" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-user-edit"/>
            </q-item-section>
            <q-item-section>
              អ្នកជម្ងឺ
            </q-item-section>
          </q-item>
          <q-item to="/echo" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-desktop"/>
            </q-item-section>
            <q-item-section>
              ពិនិត្យអេកូ
            </q-item-section>
          </q-item>
          <q-expansion-item
            expand-separator
            icon="fas fa-vial"
            label="ឡាបូ"
          >
            <q-list class="q-pl-lg" padding>
              <q-item to="/labo" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="check"/>
                </q-item-section>
                <q-item-section>
                  ពិនិត្យឡាបូ
                </q-item-section>
              </q-item>
              <q-item to="/labo-setting" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="settings"/>
                </q-item-section>
                <q-item-section>
                  កំណត់ឡាបូ
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item
            expand-separator
            icon="payment"
            label="ចំណូល-ចំណាយ"
          >
            <q-list class="q-pl-lg" padding>
              <q-item to="/income" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="undo"/>
                </q-item-section>
                <q-item-section>
                  ចំណូល
                </q-item-section>
              </q-item>
              <q-item to="/expanse" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="redo"/>
                </q-item-section>
                <q-item-section>
                  ចំណាយ
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-item to="/room" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-person-booth"/>
            </q-item-section>
            <q-item-section>
              បន្ទប់
            </q-item-section>
          </q-item>
          <q-item to="/examine" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-procedures"/>
            </q-item-section>
            <q-item-section>
              សម្រាកព្យាបាល
            </q-item-section>
          </q-item>
          <q-separator />
          <q-expansion-item
            expand-separator
            icon="pie_chart"
            label="របាយការណ៍"
          >
            <q-list class="q-pl-lg" padding>
              <q-item to="/stock-report" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="content_paste"/>
                </q-item-section>
                <q-item-section>
                  ស្តុកទំនិញ
                </q-item-section>
              </q-item>
            </q-list>
            <q-list class="q-pl-lg" padding>
              <q-item to="/import-report" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="content_paste"/>
                </q-item-section>
                <q-item-section>
                  ទិញទំនិញ
                </q-item-section>
              </q-item>
            </q-list>
            <q-list class="q-pl-lg" padding>
              <q-item to="/sale-report" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="content_paste"/>
                </q-item-section>
                <q-item-section>
                  លក់ទំនិញ
                </q-item-section>
              </q-item>
            </q-list>
            <q-list class="q-pl-lg" padding>
              <q-item to="/staff-salary-report" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="content_paste"/>
                </q-item-section>
                <q-item-section>
                  ប្រាក់ខែបុគ្គលិក
                </q-item-section>
              </q-item>
            </q-list>
            <q-list class="q-pl-lg" padding>
              <q-item to="/income-report" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="content_paste"/>
                </q-item-section>
                <q-item-section>
                  ចំណូលផ្សេងៗ
                </q-item-section>
              </q-item>
            </q-list>
            <q-list class="q-pl-lg" padding>
              <q-item to="/expense-report" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="content_paste"/>
                </q-item-section>
                <q-item-section>
                  ចំណាយផ្សេងៗ
                </q-item-section>
              </q-item>
            </q-list>
            <q-list class="q-pl-lg" padding>
              <q-item to="/profit-and-lose-report" clickable v-ripple exact>
                <q-item-section avatar>
                  <q-icon name="content_paste"/>
                </q-item-section>
                <q-item-section>
                  ខាត-ចំណេញ
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import {LocalStorage} from 'quasar'
  const user_id = LocalStorage.getItem('user_info');
  const stringOptions = [
    'quasarframework/quasar',
    'quasarframework/quasar-awesome'
  ];

  export default {
    name: 'MyLayout',
    data() {
      return {
        drawer: false,
        miniState: true,
        text: '',
        options: null,
        filteredOptions: [],
        leftDrawerOpen: false,
        menu: 'home',
        mobileData: true,
        bluetooth: false
      }
    },
    computed: {
      getCurrentRoute() {
        let self = this;
        return self.$store.getters['active_route/getCurrentRoute']
      },
      getDefaultStock() {
        let items = [];
        let total_stock = this.$store.getters['stock/getStockDetailForReport'].filter(function (f) {
          return f.purchase_status === 'Receive';
        });
        total_stock.map(function (d) {
          const index = items.findIndex((e) => e.pro_name === d.product.name);
          if (index === -1) {
            items.push({
              pro_name: d.product.name,
              pro_description: d.product.description,
              invent_type: d.invent_type,
              pro_type: d.product.type,
              pro_alert: d.product.stock_alert,
              stock_qty: d.stock_qty,
              unit: d.product.unit,
            })
          } else {
            items[index].stock_qty += d.stock_qty;
          }
        });
        return items;
      },
      getLittleStock() {
        return this.getDefaultStock.filter(function (f) {
          return f.stock_qty > 0 && f.stock_qty <= f.pro_alert;
        });
      },
      getEmptyStock() {
        return this.getDefaultStock.filter(function (f) {
          return f.stock_qty === 0;
        });
      },
    },
    methods: {
      filter(val, update) {
        if (this.options === null) {
          // load data
          setTimeout(() => {
            this.options = stringOptions
            this.$refs.search.filter('')
          }, 2000)
          update()
          return
        }

        if (val === '') {
          update(() => {
            this.filteredOptions = this.options.map(op => ({label: op}))
          })
          return
        }

        update(() => {
          this.filteredOptions = [
            {
              label: val,
              type: 'In this repository'
            },
            {
              label: val,
              type: 'All GitHub'
            },
            ...this.options
              .filter(op => op.toLowerCase().includes(val.toLowerCase()))
              .map(op => ({label: op}))
          ]
        })
      },
      logout() {
        LocalStorage.remove('userInfo');
        this.$router.push('/login')
      },
    },
    async created() {
      let self = this;
      let user_info = LocalStorage.getItem('userInfo');
      self.$q.loading.show();
      await self.$store.dispatch('auth/updateUserData', user_info);
      let route_meta = self.$router.currentRoute.meta;
      await self.$store.dispatch('active_route/updateCurrentRoute', route_meta)
      await self.$store.dispatch('blog/fetchBlog')
      await self.$store.dispatch('address_book/fetchProvince')
      await self.$store.dispatch('address_book/fetchDistrict')
      await self.$store.dispatch('address_book/fetchCommune')
      await self.$store.dispatch('address_book/fetchVillage')
      await self.$store.dispatch('address_book/fetchAddressBook')
      await self.$store.dispatch('staff/fetchStaff')
      await self.$store.dispatch('patient/fetchPatient')
      await self.$store.dispatch('labo/fetchLabo');
      await self.$store.dispatch('echo_setting/fetchEchoSetting');
      await self.$store.dispatch('echo/fetchEcho');
      await self.$store.dispatch('echo/fetchEchoBaby');
      await self.$store.dispatch('room/fetchRoom');
      await self.$store.dispatch('product/fetchProductType');
      await self.$store.dispatch('product/fetchUnitType');
      await self.$store.dispatch('examine/fetchExamine');
      await self.$store.dispatch('product/fetchProduct');
      await self.$store.dispatch('supplier/fetchSupplier');
      await self.$store.dispatch('stock/fetchStock');
      await self.$store.dispatch('sale/fetchSale');
      await this.$store.dispatch('stock/fetchStockDetailForReport');
      self.$q.loading.hide();
    }
  }
</script>
