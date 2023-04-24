<template lang="">

  <div class="page">
    <!-- Navbar -->
    <Navbar />
    <div class="page-wrapper">
      <!-- Page header -->
      <div class="page-header d-print-none">
        <div class="container-xl">
          <div class="row g-2 align-items-center">
            <div class="col">
              <!-- Page pre-title -->
              
              <h2 class="page-title">
                Dashboard
              </h2>
            </div>
            <!-- Page title actions -->
            <div class="col-auto ms-auto d-print-none">
              <div class="btn-list">
                <span class="d-none d-sm-inline">
                  <!-- <router-link class="btn" :to="{name: 'Customers'}">Create Order</router-link> -->
                </span>
                <a href="#" class="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                  <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                  Create new Admin
                </a>
                <a href="#" class="btn btn-primary d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report">
                  <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Page body -->
      <div class="page-body">
        <div class="container-xl">
          <div class="row row-deck row-cards">
            
            
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Employee Status</h3>
                </div>
                <div class="card-body border-bottom py-3">
                  <div class="d-flex">
                    <div class="text-muted">
                      Show
                      <div class="mx-2 d-inline-block">
                        <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
                      </div>
                      entries
                    </div>
                    <div class="ms-auto text-muted">
                      Search:
                      <div class="ms-2 d-inline-block">
                        <input type="text" class="form-control form-control-sm" aria-label="Search invoice">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table card-table table-vcenter text-nowrap datatable">
                    <thead>
                      <tr>
                        <th class="w-1"><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices"></th>
                        <th>Name</th>
                        <th>Quantiy</th>
                        <th>Price</th>
                        <th>Cost</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(invitation, index) in invitations" :key="index">
                        <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                        <td><span class="text-muted">{{ invitation.name }}</span></td>
                        <td>
                          {{ invitation.email }}
                        </td>
                        <td><span class="text-muted">{{ invitation.status }}</span></td>
                        <td class="text-end">
                           <button class="btn btn-primary" @click.prevent="Cancel(invitation.id)">
                            change Employee Status
                           </button>
                         </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer d-flex align-items-center">
                  <p class="m-0 text-muted">Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
                  <ul class="pagination m-0 ms-auto">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                        <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                        prev
                      </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        next <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Companies</h3>
                </div>
                <div class="card-body border-bottom py-3">
                  <div class="d-flex">
                    <div class="text-muted">
                      Show
                      <div class="mx-2 d-inline-block">
                        <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
                      </div>
                      entries
                    </div>
                    <div class="ms-auto text-muted">
                      Search:
                      <div class="ms-2 d-inline-block">
                        <input type="text" class="form-control form-control-sm" aria-label="Search invoice">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table card-table table-vcenter text-nowrap datatable">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Admin Id</th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(company, index) in companies" :key="index">
                        <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                        <td><span class="text-muted">{{ company.name }}</span></td>
                        <td>
                          {{ company.user_id }}
                        </td>
                        <td class="text-end">
                           <button class="btn btn-primary" @click="showInvitationModal(company.id)">
                            create invitation
                           </button>
                         </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer d-flex align-items-center">
                  <p class="m-0 text-muted">Showing <span>{{ currentPage }}</span> to <span>{{ lastPage }}</span> of <span>{{ Pagenumber }}</span> entries</p>
                  <ul class="pagination m-0 ms-auto">
                      <li class="page-item">
                        <a class="page-link" @click="Prev" tabindex="-1" aria-disabled="true">
                          <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M15 6l-6 6l6 6" />
                          </svg>
                          Prev
                        </a>
                      </li>
                      <li class="page-item" v-for="page in pages" :key="page" :class="{ active: page === currentPage }">
                        <a class="page-link" @click="paginates(page)">{{ page }}</a>
                      </li>
                      <li class="page-item" :class="{ disabled: currentPage === lastPage }" style="cursor:pointer;">
                        <a class="page-link" @click="Next" style="cursor:pointer;">
                          Next <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </a>
                      </li>
                    </ul> 

                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <footer class="footer footer-transparent d-print-none">
        <div class="container-xl">
          <div class="row text-center align-items-center flex-row-reverse">
            <div class="col-12 col-lg-auto mt-3 mt-lg-0">
              <ul class="list-inline list-inline-dots mb-0">
                <li class="list-inline-item">
                  Copyright &copy; 2023
                  <a href="." class="link-secondary">ELARFAOUI</a>.
                  All rights reserved.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  <div class="modal modal-blur fade" id="modal-report" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New Customer</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="storecustomer()">
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" name="example-text-input" placeholder="Your Customer name">
          </div>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Zip / Postal Code</label>
                <input type="text" class="form-control" name="example-text-input" placeholder="Postal Code ">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">City / Town</label>
                <input type="text" class="form-control" name="example-text-input" placeholder="City">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="text" class="form-control" name="example-text-input" placeholder="Your Customer Email">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Phone</label>
                <input type="text" class="form-control" name="example-text-input" placeholder="Your Customer phone">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Address Line 1</label>
                <input type="text" class="form-control" name="example-text-input" placeholder="Your Customer Adress">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Address Line 2</label>
                <input type="text" class="form-control" name="example-text-input" placeholder="Address Line 2">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-link link-danger" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="submit" class="btn btn-success ms-auto">
            <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            Create
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>

  <div class="modal modal-blur fade" id="modal_invitation" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Are You short you wanna cancell this invitation!!!</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="SendInvitation()" enctype="multipart/form-data">
          <div class="modal-body">
          <div class="row">
            <!-- <div v-if="error" class="alert alert-danger">{{ error }}</div> -->
            <div class="col-lg-12">
              <div class="mb-3">
              <label class="form-label">Enter Name of User</label>
              <input v-model="invitation.name" type="text" class="form-control" name="example-text-input name" id="name" placeholder="name">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Enter Email of User</label>
                <input v-model="invitation.email" type="text" class="form-control" name="example-text-input email" id="email" placeholder="Your Email">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-link link-danger" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="submit" class="btn btn-success ms-auto">
            <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            Send Invitation
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>

  <!-- <Loading v-if="loading" /> -->
  <div class="page page-center" v-if="loading">
      <div class="container-slim py-4">
          <div class="text-center">
              <div class="mb-3">
              <a href="." class="navbar-brand navbar-brand-autodark"><img :src="require('@/static/logo.jpg')" height="36" alt=""></a>
              </div>
              <div class="text-muted mb-3">Preparing application</div>
              <div class="progress progress-sm">
              <div class="progress-bar progress-bar-indeterminate"></div>
              </div>
          </div>
      </div>
  </div>

</template>
  
<script>  
import Navbar from "@/components/Navbar.vue";
import Loading from "@/components/Loading.vue";
import { mapActions, mapGetters } from "vuex";

export default {
data() {
  return {
    invitation: {
      'name': '',
      'company_id': '',
      'invited_by': '',
      'email': ''
    },
    employee: {
      'id': '',
      'status': ''
    },
    file: null,
    loading: false,
    dropdownText: '',
    selectedCompanyId: null,
  }
},
components: { Navbar, Loading },
mounted() {
  // this.fetchChartData(this.daysToFetch);
},
created() {
  this.getcompanies();
  this.GetInvitations()
},
methods: {
  ...mapActions({
    "Createcompany": "adminstrator/createcompany",
    "getcompanies": "adminstrator/getcompanies",
    "GetInvitations": "adminstrator/getInvitations",
    "sendInvitation": "adminstrator/sendInvitation",
    "CancelInvitation": "adminstrator/cancelInvitation"
  }),
  async deleteCompany(id) {
    const confirmed = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    
    if (confirmed) {
      await this.Destroy(id);
      this.getcompanies();
    }
  },
   async SendInvitation() {
    console.log(this.invitation)
    await this.sendInvitation(this.invitation)
    this.GetInvitations()
    
  },
  showInvitationModal(companyId) {
    this.invitation.company_id = companyId
    this.invitation.invited_by = this.user.id
    const createOrderModal = new bootstrap.Modal(document.getElementById('modal_invitation'), {});
    createOrderModal.show();
  },
  showStatusModal(UserId) {
    this.employee.id = UserId
    const createOrderModal = new bootstrap.Modal(document.getElementById('modal_employee_status'), {});
    createOrderModal.show();
  },
  async Cancel(id) {
    const confirmed = await swal({
      title: "Are you sure?",
      text: "Once Cancelled, you will not be able to change status!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    
    if (confirmed) {
      await this.CancelInvitation(id);
      this.GetInvitations()
    }
  },
},
computed: {
  ...mapGetters({ 
     'user': 'auth/user',
     'companies': 'adminstrator/companies',
     'invitations': 'adminstrator/invitations',
   }),
},
watch: {
  
}

}
</script>
<style scoped>
:root {
--text-color: #fff; /* set the default text color to black */
}

/* set the text color to white in dark mode */
.theme-dark:not(body) {
--text-color: #fff;
}

/* set the text color to black when body has the theme-dark class */
body.theme-dark {
--text-color: #fff !important;
}

/* apply the text color to all elements */
body.theme-dark * {
color: #fff;
}
.apexcharts-xaxis-tick {
    opacity: 0;
}
.dropdown-item.active, .dropdown-item:active {
    color: var(--tblr-dropdown-link-active-color);
    text-decoration: none;
    background-color: #ffffff;
    COLOR: #000 !important;
}
</style>
