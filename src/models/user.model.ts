import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  profile: {
    title: string;
    contact: {
      phone: string;
      location: string;
      github: string;
    },
    summary: string;
    skills: {
      title: string;
      description: string;
    }[],
    experience: {
      employeer: string;
      location: string;
      title: string;
      startDate?: string;
      endDate?: string;
      descriptions: string[];
    }[];
    eduction: {
      employeer: string;
      location: string;
      title: string;
      startDate?: string;
      endDate?: string;
      descriptions: string[];
    }[];
    certificates: {
      title: string;
      description: string;
    }[];
    projects: {
      title: string;
      description: string;
    }[]
  }
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    profile: {
      title: {
        type: String,
        required: false
      },
      contact: {
        phone: {
          type: String,
          required: false
        },
        location: {
          type: String,
          required: false
        },
        github: {
          type: String,
          required: false
        }
      },
      summary: {
        type: String,
        required: false
      },
      skills: [{
        title: {
          type: String,
          required: false
        },
        description: {
          type: String,
          required: false
        }
      }],
      experience: [{
        employeer: {
          type: String,
          required: false
        },
        location: {
          type: String,
          required: false
        },
        title: {
          type: String,
          required: false
        },
        startDate: {
          type: String,
          required: false
        },
        endDate: {
          type: String,
          required: false
        },
        descriptions: [{
          type: String,
          required: false
        }]
      }],
      eduction: [{
        employeer: {
          type: String,
          required: false
        },
        location: {
          type: String,
          required: false
        },
        title: {
          type: String,
          required: false
        },
        startDate: {
          type: String,
          required: false
        },
        endDate: {
          type: String,
          required: false
        },
        descriptions: [{
          type: String,
          required: false
        }]
      }],
      certificates: [{
        title: {
          type: String,
          required: false
        },
        description: {
          type: String,
          required: false
        }
      }],
      projects: [{
        title: {
          type: String,
          required: false
        },
        description: {
          type: String,
          required: false
        }
      }]
    },
    isActive: {
      type: Boolean,
      default: true,
      required: false
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const User = mongoose.model<IUser>('User', userSchema);