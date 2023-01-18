<template>
  <div class="row">
    <div class="col">
      <q-card flat bordered class="my-card bg-grey-1" style="margin-right: 50%;">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <h4>Mes listes</h4>
            </div>
            <div class="col-auto">
              <q-btn outline style="color: purple;" label="+" @click="creeList = true" />
              <q-dialog v-model="creeList" persistent>
                <q-card style="min-width: 350px">
                  <q-card-section>
                    <h2>Ajouter une liste</h2>
                    <br>
                    <q-input label="Titre" type="text" outlined class="q-mb-md" v-model="listForm.title" />
                    <q-input label="Description" type="text" outlined class="q-mb-md" v-model="listForm.description" />
                  </q-card-section>
                  <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn flat label="Créer" color="primary" @click="createList" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <p>Vous n'avez aucune liste créer en une première pour commencer en cliquant sur le bouton +</p>
        </q-card-section>

        <q-separator />
        <div v-for="list in listData" :key="list._id">
          <div>
            <q-card-actions>
              <div class="row">
                <q-btn flat style="width: 230px"> {{ list.title }}</q-btn>
              </div>
            </q-card-actions>
          </div>
        </div>

      </q-card>
    </div>
    <div class="col" style="margin-top: 110px;">
      <h1 style="margin-bottom: 20px;">
        Hello, {{ userData.email }} 👋
      </h1>

      <div style="margin-bottom: 20px;">Tu n’as aucune liste de tâche pour le moment créer en une en cliquant sur le
        bouton ci-dessous dans le menu pour débuter</div>
      <div style="font-weight: bold;margin-left: 30%;">
        <q-btn style="background: purple; color: white" label="Créer une liste" @click="creeList = true" />
        <q-dialog v-model="creeList" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <h2>Ajouter une liste</h2>
              <br>
              <q-input label="Titre" type="text" outlined class="q-mb-md" v-model="listForm.title" />
              <q-input label="Description" type="text" outlined class="q-mb-md" v-model="listForm.description" />
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn flat label="Créer" color="primary" @click="createList" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>

      <div style="font-weight: bold;margin: 40px;">
        <div v-for="list in listData" :key="list._id">
          <q-card class="my-card" style="margin-bottom: 40px;">
            <q-card-section class="bg-grey text-white">
              <div class="text-h6" style="text-align: center;">{{ list.title }}
                <q-btn color="white" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section style="color:red" @click="deleteList(list._id)">Supprimer liste</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section @click="showDialog()">Modifier liste</q-item-section>
            <q-dialog v-model="dialogOpen" ref="dialog" :list-id="listId" :list-title="listTitle">
              <q-card>
                <q-card-section>
                  <h2>Modifier le titre</h2>
                  ff
                  <q-input label="Titre" type="text" outlined class="q-my-md" v-model="listForm.title" />
                  <q-btn label="Modifier" class="full-width" color="primary" @click="updateList(listId)" />
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="Close" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
                <q-btn @click="showDialog()"></q-btn>
            <q-dialog v-model="dialogOpen" ref="dialog" :list-id="listId" :list-title="listTitle">
              <q-card>
                <q-card-section>
                  <h2>Modifier le titre</h2>
                  ff
                  <q-input label="Titre" type="text" outlined class="q-my-md" v-model="listForm.title" />
                  <q-btn label="Modifier" class="full-width" color="primary" @click="updateList(listId)" />
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="Close" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
              </div>
            </q-card-section>
            <q-card-actions vertical align="center">
              <q-btn flat></q-btn>
              <div v-for="task in taskData" :key="task.id">
                <q-btn outlined class="q-my-sm q-mx-sm q-py-sm q-px-sm" color="primary"></q-btn>
              </div>
              <q-btn flat>Voir la liste complète</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <div class="col" style="margin-top:5%">
      <div style="font-weight: bold;margin-left: 30%;">
        <q-btn style="background: purple; color: white" label="Créer une tache" @click="creeTask = true" />
        <q-dialog v-model="creeTask" persistent>
          <q-card class="q-mt-md q-ml-md" style="width:80%">
            <q-card-section>
              <h2>Ajouter une tache</h2>
              <br>
              <q-input label="Titre" type="text" outlined class="q-mb-md" v-model="taskForm.title" />
              <q-select label="Liste" outlined rounded class="q-mb-md" v-model="taskForm.list" emit-value map-options
                :options="listData" option-label="title" option-value="_id" />
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn flat label="Créer" color="primary" @click="createTask" v-close-popup />
            </q-card-section>
          </q-card>
        </q-dialog>
        <div class="col">
          <q-card class="q-mt-md q-ml-md">
            <q-card-section>
              <h2>Mes taches</h2>
              <div>
                <div v-for="task in taskData" :key="task.id">
                  <q-btn outlined class="q-my-sm q-mx-sm q-py-sm q-px-sm" color="primary">{{
                    task.activityName
                  }}</q-btn>
                  <span label="Done">
                    <span v-if="task.activityDone">
                      <q-checkbox color="green" v-model="task.activityDone" @click="handleUnvalid(task._id)" />
                    </span>
                    <span v-else>
                      <q-checkbox v-model="task.activityDone" @click="handleValidate(task._id)" />
                    </span>
                    <span @click="deleteTask(task._id)">
                      <q-icon name="delete" color="red" />
                    </span>
                  </span>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import { useUserStore } from 'src/stores/user-store'
import { useListStore } from 'src/stores/lists-store'
import { useTaskStore } from 'src/stores/tasks-store'
import { computed, onMounted, ref } from 'vue'
import { Notify } from 'quasar'

const userStore = useUserStore()
const userData = computed(() => userStore.user)
const listStore = useListStore()
const listData = computed(() => listStore.list)
const taskStore = useTaskStore()
const taskData = computed(() => taskStore.list)

const dialogOpen = ref(false)
const listId = ref(null)
const creeList = ref(false)
const creeTask = ref(false)

const listForm = ref({
  title: '',
  description: ''
})
const taskForm = ref({
  title: '',
  list: ''
})

const createList = async () => {
  try {
    await listStore.createList(listForm.value)
    Notify.create('Liste créée')
  } catch (err) {
    console.log(err)
  }
}
const deleteList = async (id) => {
  try {
    await listStore.deleteList(id)
    Notify.create('Liste supprimée')
  } catch (err) {
    console.log(err)
  }
}

const updateList = async (id) => {
  try {
    await listStore.updateList(id)
    Notify.create('List modifiée')
  } catch (err) {
    console.log(err)
  }
}

const createTask = async () => {
  try {
    await taskStore.createTask(taskForm.value)
    Notify.create('Task créée')
  } catch (err) {
    console.log(err)
  }
}

const showDialog = (id) => {
  try {
    dialogOpen.value = true
    listId.value = id
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await userStore.loadUser()
  await listStore.getLists()
  await taskStore.getAllTasks()
})
</script>
