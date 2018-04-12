
// instance of this class should be named actionButtons
class ActionButtons {

  constructor(root) {
    this.root = root
    this.button = {click: (buttonName) => console.log('Click         ' + buttonName)}
  }


  async clickButton(buttonName) {
    await this.button.click(buttonName)
  }

  get clickOn() {
    return {
      sendForReview: async () => await this.clickButton('Send for Review'),
      reviewComplete: async () => await this.clickButton('Review Complete'),
      forwardForReview: async () => await this.clickButton('Forward for Review'),
      sendToSub: async () => await this.clickButton('Send to Sub'),
      addToPackage: async () => await this.clickButton('Add to Package'),
      cancel: async () => await this.clickButton('Cancel'),
      submit: async () => await this.clickButton('Submit'),
      recalculateSelected: async () => await this.clickButton('Recalculate Selected'),
      recalculateAll: async () => await this.clickButton('Recalculate All'),
      save: async () => await this.clickButton('Save'),
      mailMerge: async () => await this.clickButton('Mail Merge'),
      add: async () => await this.clickButton('Add'),
      addItem: async () => await this.clickButton('Add Item'),
      saveNAdd: async () => await this.clickButton('Save & Add New'),
      addCapitalPlan: async () => await this.clickButton('Add Capital Plan'),
      applyTemplate: async () => await this.clickButton('Apply Template'),
      edit: async () => await this.clickButton('Edit'),
      markReceived: async () => await this.clickButton('Mark Received'),
      reject: async () => await this.clickButton('Reject'),
      draft: async () => await this.clickButton('Draft'),
      received: async () => await this.clickButton('Received'),
      requestApproval: async () => await this.clickButton('Request Approval'),
      returnToDraft: async () => await this.clickButton('Return to Draft'),
      comitmentReturnToDraft: async () => await this.clickButton('Return To Draft'), // difference in capital T
      approve: async () => await this.clickButton('Approve'),
      void: async () => await this.clickButton('Void'),
      yesRejectInvoice: async () => await this.clickButton('Yes, Reject the Invoice'),
      yesRejectCommitment: async () => await this.clickButton('Yes, Reject the Commitment'),
      yesApproveInvoice: async () => await this.clickButton('Yes, Approve the Invoice'),
      yesApproveCommitment: async () => await this.clickButton('Yes, Approve the Commitment'),
      continue: async () => await this.clickButton('Continue'),
      addCompany: async () => await this.clickButton('Add Company'),
      addContact: async () => await this.clickButton('Add Contact'),
      lookup: async () => await this.clickButton('Lookup'),
      lookupContact: async () => await this.clickButton('Lookup Contact'),
      delete: async () => await this.clickButton('Delete'),
      markPaid: async () => await this.clickButton('Mark Paid'),
      yesMarkPaid: async () => await this.clickButton('Yes, Mark as Paid'),
      lookupCompany: async () => await this.clickButton('Lookup Company'),
      generate: async () => await this.clickButton('Generate'),
      saveNAddConstructionCodes: async () => await this.clickButton('Save & Add Construction Codes'),
      compare: async () => await this.clickButton('Compare'),
      addScenario: async () => await this.clickButton('Add Scenario'),
      backToProjectScenarios: async () => await this.clickButton('Back to Project Scenarios'),
      messageHistory: async () => await this.clickButton('Message History'),
      addBidPackage: async () => await this.clickButton('Add Bid Package'),
      manageCodes: async () => await this.clickButton('Manage Codes'),
      sendMessage: async () => await this.clickButton('Send Message'),
      clearSelection: async () => await this.clickButton('Clear Selection'),
      close: async () => await this.clickButton('Close'),
      send: async () => await this.clickButton('Send'),
      checkSpelling: async () => await this.clickButton('Check Spelling'),
      filter: async () => await this.clickButton('Filter'),
      reset: async () => await this.clickButton('Reset'),
      previousCashFlows: async () => await this.clickButton('Previous Cash Flows'),
      setupCashFlow: async () => await this.clickButton('Setup Cash Flow'),
      updateCashFlow: async () => await this.clickButton('Update Cash Flow'),
      update: async () => await this.clickButton('Update'),
      export: async () => await this.clickButton('Export'),
      import: async () => await this.clickButton('Import'),
      ignore: async () => await this.clickButton('Ignore'),
      change: async () => await this.clickButton('Change'),
      changeAll: async () => await this.clickButton('Change All'),
      ignoreAll: async () => await this.clickButton('Ignore All'),
      addToDictionary: async () => await this.clickButton('Add to Dictionary'),
      ok: async () => await this.clickButton('OK'),
      refresh: async () => await this.clickButton('Refresh'),
      print: async () => await this.clickButton('Print'),
      addEvent: async () => await this.clickButton('Add Event'),
      yesDeleteTheEvent: async () => await this.clickButton('Yes, Delete the Event'),
      makePending: async () => await this.clickButton('Make Pending'),
      addTask: async () => await this.clickButton('Add Task'),
      startProcess: async () => await this.clickButton('Start Process'),
      startSelectedProcessType: async () => await this.clickButton('Start Selected Process Type'),
      makeProjected: async () => await this.clickButton('Make Projected'),
    }
  }
}

const actionButtons = new ActionButtons()

const a = async () => {
  await actionButtons.clickOn['yesApproveCommitment']()
}

a()