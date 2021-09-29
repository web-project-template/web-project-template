<template>
  <div class="edit-view">
    <div class="edit-content">
      <c-form :model="addressInfo" :rules="addressInfoRules" ref="addressForm">
        <c-form-item>
          <span slot="label">收货人</span>
          <input slot="content" type="text" placeholder="真实姓名" v-model="addressInfo.recipient" maxlength="15">
        </c-form-item>
        <c-form-item>
          <span slot="label">手机号码</span>
          <input slot="content" type="text" placeholder="电话" v-model="addressInfo.phoneNumber">
        </c-form-item>
        <c-form-item>
          <span slot="label">详细地址</span>
          <textarea slot="content" class="address-input" placeholder="精确到门牌号" v-model="addressInfo.address" maxlength="50"></textarea>
        </c-form-item>
      </c-form>
      <c-button class="btn save-address-btn " v-on:click="clickSave">保存地址</c-button>
    </div>
  </div>
</template>

<script>
import Button from '../../../components/c-button/c-button.vue'
import Form from '../../../components/c-form/c-form.vue'
import FormItem from '../../../components/c-form/c-form-item.vue'

export default {
  name: 'v-edit-address',
  data () {
    return {
      /* addressInfo: {
          recipient: 1,
          phoneNumber: 13552016666,
          address: '北京市朝阳区雍和宫大厦F座6楼'
        }, */
      addressInfo: {
        recipient: null,
        phoneNumber: null,
        address: null
      },
      addressInfoRules: {
        recipient: [
          {required: true, message: '请输入姓名'},
          {max: 15, message: '姓名最多输入15个字符'}
        ],
        phoneNumber: [
          {required: true, message: '请输入手机号码'},
          {pattern: /^1[34578]\d{9}$/, message: '手机号码输入错误'}
        ],
        address: [
          {required: true, message: '请输入详细地址'},
          {max: 50, message: '收件地址最多输入50个字符'}
        ]
      },
      tipsDialogVisible: false
    }
  },
  computed: {
    onSubmit () {
      let bo = true
      if (this.addressInfo.recipient && this.addressInfo.phoneNumber && this.addressInfo.address) {
        bo = false
      }
      return bo
    }
  },
  watch: {
    'addressInfo.recipient': function (newVal, oldVal) {
      this.addressInfo.recipient = newVal.replace(/(^\s*)/g, '')
    },
    'addressInfo.phoneNumber': function (newVal, oldVal) {
      this.addressInfo.phoneNumber = newVal.replace(/\D/g, '').substring(0, 11)
    },
    'addressInfo.address': function (newVal, oldVal) {
      this.addressInfo.address = newVal.replace(/(^\s*)/g, '')
    }
  },
  methods: {
    clickSave () {
      this.$refs['addressForm'].validate((bo, invalidFields) => {
        if (bo) {
          this.tipsDialogVisible = true
        } else {
          if (invalidFields[0]) {
            this.$message({
              showClose: false,
              message: invalidFields[0].message
            })
          }
        }
      })
    },
    clickCheack () {
      this.tipsDialogVisible = false
    },
    clickOk () {
      this.tipsDialogVisible = false
    }
  },
  components: {
    'c-button': Button,
    'c-form': Form,
    'c-form-item': FormItem
  }
}
</script>

<style lang="stylus">
  @import '../../../assets/mixins/index.styl';
  .edit-view {
    padding-top: 48px;

    .edit-content {
      background: rgba(81, 30, 174, 1);
      padding-bottom: 50px;

      .c-form-item{
        border-bottom:2px solid #6234B6;
        padding:10px 0;
        &:last-child{
          border-bottom:0;
        }

        label{
          display:inline-block;
          line-height:46px;
          span{
            display:inline-block;
            line-height:60px;
          }
        }

        input{
          line-height:46px;
          border-radius:0;
        }
      }
      .address-input{
        min-height:150px;
      }
    }
  }
</style>
