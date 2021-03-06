import mongoose from 'mongoose';
import _ from 'lodash';
import standardField from '../../component/db/dbStandardField';

export default new mongoose.Schema(
  _.assignIn(
    _.cloneDeep(standardField),
    {
      ownerId: { type: 'ObjectId', required: true },
      householdId: { type: 'ObjectId', default: null },

      title: { type: String, required: true },
      member: [{ type: 'ObjectId' }],
      startDate: { type: Date, required: true, default: Date.now },
      endDate: { type: Date, required: true, default: Date.now },
      fullAddress: { type: String },
      notify: { type: Boolean, default: false },
      allDay: { type: Boolean, default: false },
    }));
