const sizes = [
  {
    name: 'extra_small',
    size: parseInt(process.env.AVATAR_SIZE_EXTRA_SMALL, 10)
  },
  {
    name: 'small',
    size: parseInt(process.env.AVATAR_SIZE_SMALL, 10)
  },
  {
    name: 'medium',
    size: parseInt(process.env.AVATAR_SIZE_MEDIUM, 10)
  },
  {
    name: 'large',
    size: parseInt(process.env.AVATAR_SIZE_LARGE, 10)
  },
  {
    name: 'extra_large',
    size: parseInt(process.env.AVATAR_SIZE_EXTRA_LARGE, 10)
  },
  {
    name: 'extra_extra_large',
    size: parseInt(process.env.AVATAR_SIZE_EXTRA_EXTRA_LARGE, 10)
  }
];

module.exports = sizes;
