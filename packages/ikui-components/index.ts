import { App } from 'vue'
import IkButton from './button'
import IkInput from './input'
import IkIcon from './icon'
import IkCheckbox from './checkbox'
import IkCheckboxGroup from './checkbox-group'

import IkBacktop from './backtop'
import IkSelect from './select'
import IkAvatar from './avatar'
import IkModal from './modal'
import { IkContainer, IkAside, IkMain, IkHeader } from './layout'
import { message } from './message'
import { IkLoading, loadingService } from './loading'

export {
  IkButton,
  IkInput,
  IkLoading,
  loadingService,
  IkIcon,
  message,
  IkCheckbox,
  IkCheckboxGroup,
  IkBacktop,
  IkModal,
  IkContainer,
  IkAside,
  IkMain,
  IkHeader,
  IkAvatar,
  IkSelect,
}

export * from './button'

export default {
  install(app: App): void {
    app.component(IkButton.name, IkButton)
    app.component(IkInput.name, IkInput)
    app.component(IkIcon.name, IkIcon)
    app.component(IkCheckbox.name, IkCheckbox)
    app.component(IkCheckboxGroup.name, IkCheckboxGroup)
    app.component(IkBacktop.name, IkBacktop)
    app.component(IkModal.name, IkModal)
    app.component(IkContainer.name, IkContainer)
    app.component(IkAside.name, IkAside)
    app.component(IkMain.name, IkMain)
    app.component(IkHeader.name, IkHeader)
    app.component(IkAvatar.name, IkAvatar)
    app.component(IkSelect.name, IkSelect)
    // app.component(IkLoading.name, IkLoading)
    app.directive('loading', IkLoading)
    app.config.globalProperties.IkLoading = loadingService
    app.config.globalProperties.$message = message
  },
}
