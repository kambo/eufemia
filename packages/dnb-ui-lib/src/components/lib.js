/**
 * ATTENTION: This file is auto generated by using "prepareTemplates".
 * Do not change the content!
 *
 */

/**
 * Library Index template to autogenerate all the components and patterns
 * Used by "prepareTemplates"
 */

import { registerElement } from '../shared/component-helper'

// import all the aviable components
import Button from './button/Button'
import DatePicker from './date-picker/DatePicker'
import Dropdown from './dropdown/Dropdown'
import FormLabel from './form-label/FormLabel'
import FormStatus from './form-status/FormStatus'
import Icon from './icon/Icon'
import IconPrimary from './icon-primary/IconPrimary'
import Input from './input/Input'
import InputMasked from './input-masked/InputMasked'
import LineTitle from './line-title/LineTitle'
import Logo from './logo/Logo'
import Modal from './modal/Modal'
import Notification from './notification/Notification'
import Progress from './progress/Progress'
import Slider from './slider/Slider'
import StepIndicator from './step-indicator/StepIndicator'
import Switch from './switch/Switch'
import Tabs from './tabs/Tabs'

// define / export all the aviable components
export {
  Button,
  DatePicker,
  Dropdown,
  FormLabel,
  FormStatus,
  Icon,
  IconPrimary,
  Input,
  InputMasked,
  LineTitle,
  Logo,
  Modal,
  Notification,
  Progress,
  Slider,
  StepIndicator,
  Switch,
  Tabs
}

export const getComponents = () => {
  return {
    Button,
    DatePicker,
    Dropdown,
    FormLabel,
    FormStatus,
    Icon,
    IconPrimary,
    Input,
    InputMasked,
    LineTitle,
    Logo,
    Modal,
    Notification,
    Progress,
    Slider,
    StepIndicator,
    Switch,
    Tabs
  }
}

let webComponentsAreEnabled = false
export const enableWebComponents = () => {
  if (webComponentsAreEnabled) return false
  webComponentsAreEnabled = true
  const components = getComponents()
  // register this component to work with custom element
  for (const c in components) {
    if (components[c] && components[c].tagName) {
      registerElement(
        components[c].tagName,
        components[c],
        components[c].defaultProps
      )
    }
  }
}

export default {
  enableWebComponents
}
