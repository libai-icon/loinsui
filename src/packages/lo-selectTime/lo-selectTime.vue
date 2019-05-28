<template>
<div>
  <div class="showTime">
    <input type="text" v-model="selectVal" class="input" readonly placeholder="请选择" @click="handClick">
    <!-- <span v-show="type != 'datePicker'" >~</span> -->
    <!-- <input type="text" v-model="endTime" v-show="type != 'datePicker'" class="input" readonly placeholder="请选择" @click="handClick"> -->
  </div>
  
  <div v-show="isShowType" class="date-range-wrapper">
        <div class="date-range-shadow"></div>
        <div class="date-range-box">
            <div class="box-body">
                <div class="date-range-calendar">
                    <div class="date-range-display">
                        <div class="start">{{startDateString}}</div>
                        <div class="to" v-show="type != 'datePicker'">到</div>
                        <div class="end"  v-show="type != 'datePicker'">{{endDateString}}</div>
                    </div>
                    <div class="calendar-container">
                        <div class="main">
                            <div class="tool-bar">
                                <div class="arrow" @click="toLastMonth">&lt;</div>
                                <div class="display">{{monthPointDateString}}</div>
                                <div class="arrow" @click="toNextMonth">&gt;</div>
                            </div>
                            <div class="weeks">
                                <span class="week">一</span>
                                <span class="week">二</span>
                                <span class="week">三</span>
                                <span class="week">四</span>
                                <span class="week">五</span>
                                <span class="week">六</span>
                                <span class="week">日</span>
                            </div>
                            <div class="date-box">
                                <div class="date" :class="pick.customerClass" v-for="pick in picks"
                                     @click="pickDate(pick.date)">
                                    {{pick.displayNumber}}
                                </div>
                            </div>
                        </div>
                        <div class="confirm-box">
                            <div class="cancel" @click="confirm">取消</div>
                            <div class="confirm" @click="confirm">确定</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
	export default{
    props: ['value', 'default_startDate', 'default_endDate','type'],
   
    name:'LoSelectTime',
		data () {
			return {
				startDate: this.default_startDate ? this.default_startDate : new Date(),
				endDate: this.default_endDate ? this.default_endDate : new Date(new Date().setDate(new Date().getDate() + 10)),
				monthPointDate: this.default_startDate ? this.default_startDate : new Date(),
        picks: [],
        isShowType:false,
        selectVal:'',
        startTime:'',
        endTime:''
			}
		},
		methods: {
			confirm () {
        
        if(this.startDate){
            this.startTime = this.startDate.getFullYear() + '-' + (this.startDate.getMonth() + 1) + '-' + this.startDate.getDate();
            this.endTime = this.endDate.getFullYear() + '-' + (this.endDate.getMonth() + 1) + '-' + this.endDate.getDate()
           this.selectVal = this.type == 'datePicker'? this.startDate.getFullYear() + '-' + (this.startDate.getMonth() + 1) + '-' + this.startDate.getDate(): this.startDate.getFullYear() + '-' + (this.startDate.getMonth() + 1) + '-' + this.startDate.getDate()+ '~'+this.endDate.getFullYear() + '-' + (this.endDate.getMonth() + 1) + '-' + this.endDate.getDate()
        }
        this.$emit('confirm', this.selectVal)
        this.isShowType = false;
       
			},
      handClick:function(){
        this.isShowType = true;
      },
			pickDate(date){
				let monthPointDate = this.monthPointDate
        let startDate = this.startDate
				let endDate = this.endDate
				if (date.getMonth() != monthPointDate.getMonth()) {
					return
				}
				if (date.toDateString() == startDate.toDateString() || date.toDateString() == endDate.toDateString()) {
					if (date.toDateString() == startDate.toDateString()) {
						this.endDate = date
					} else {
						this.startDate = date
					}
				} else {
					if (date.getTime() > endDate.getTime()) {
						this.endDate = date
					} else if (date.getTime() < startDate.getTime()) {
						this.startDate = date
					} else {
						let startDistance = date.getTime() - startDate.getTime()
						let endDistance = endDate.getTime() - date.getTime()
						if (startDistance >= endDistance) {
							this.endDate = date
						} else {
							this.startDate = date
						}
					}
        }
        if(this.type=="datePicker"){
          this.endDate = date;
          this.startDate = date;
        }
        
				this.createCalendar(this.monthPointDate)
			},
			createPickByDate (date) {
				let customerClass = ''
				let monthPointDate = this.monthPointDate
				let startDate = this.startDate
				let endDate = this.endDate
				if (date.getMonth() != monthPointDate.getMonth()) {
					customerClass = 'light'
				} else {
					if (date.toDateString() == startDate.toDateString() || date.toDateString() == endDate.toDateString()) {
						customerClass = 'start'
					} else {
						if (date.getTime() > startDate.getTime() && date.getTime() < endDate.getTime()) {
							customerClass = 'pass'
						}
					}
				}
				return {
					date: date,
					displayNumber: date.getDate(),
					customerClass: customerClass
				}
			},
			toLastMonth () {
				let tempDate = new Date(this.monthPointDate)
				tempDate.setMonth(tempDate.getMonth() - 1)
				this.monthPointDate = tempDate
				this.createCalendar(this.monthPointDate)
			},
			toNextMonth () {
				let tempDate = new Date(this.monthPointDate)
				tempDate.setMonth(tempDate.getMonth() + 1)
				this.monthPointDate = tempDate
				this.createCalendar(this.monthPointDate)
			},
			createCalendar (monthPointDate) {
				this.picks = []
				let picks = []
				let monthStartDate = new Date(monthPointDate.getFullYear(), monthPointDate.getMonth(), 1)
				//要显示的上月的dates
				let lastMonthRestNum = monthStartDate.getDay() == 0 ? 6 : monthStartDate.getDay() - 1
				for (let i = lastMonthRestNum; i > 0; --i) {
					let tempDate = new Date(monthStartDate)
					tempDate.setDate(tempDate.getDate() - i)
					picks.push(this.createPickByDate(tempDate))
				}
				//本月dates
				let tempIndexDate = new Date(monthStartDate)
				while (tempIndexDate.getMonth() === monthStartDate.getMonth()) {
					let tempDate = new Date(tempIndexDate)
					picks.push(this.createPickByDate(tempDate))
					tempIndexDate.setDate(tempIndexDate.getDate() + 1)
				}
				//要显示的下月的dates
				while (tempIndexDate.getDay() != 1) {
					let tempDate = new Date(tempIndexDate)
					picks.push(this.createPickByDate(tempDate))
					tempIndexDate.setDate(tempIndexDate.getDate() + 1)
				}
				this.picks = picks
			}
		},
		computed: {
			isShow () {
				return this.value
			},
			startDateString () {
				let startDate = this.startDate
				return startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate()
			},
			endDateString () {
				let endDate = this.endDate
				return endDate.getFullYear() + '-' + (endDate.getMonth() + 1) + '-' + endDate.getDate()
			},
			monthPointDateString () {
				let monthPointDate = this.monthPointDate
				return monthPointDate.getFullYear() + '年' + ( monthPointDate.getMonth() + 1) + '月'
			}
		},
		created () {
			this.createCalendar(this.monthPointDate)
		}
	}
</script>
<style lang="scss">
.showTime{
  display: flex;
  flex-direction: row;
  align-items: center;  
}
.date-range-shadow {
  position: absolute;
  z-index: 1000;
  opacity: .4;
  background-color: #000;
  width: 100%;
  height: 100%;
}

.date-range-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.date-range-box {
  left: 50%;
  top: 50%;
  position: absolute;
  z-index: 1001;
  box-shadow: 0 19px 60px rgba(0, 0, 0, .298039), 0 15px 20px rgba(0, 0, 0, .219608);
  transform: translate3d(-50%, -50%, 0);

  .box-body {
    background-color: #fff;
    width: 310px;
  }
}

.date-range-calendar {
  .date-range-display {
    background-color: rgb(64, 158, 255);
    padding: 20px;
    color: #fff;
    display: flex;
    font-size: 18px;
    .start {
      flex: 1;
      text-align: center;
    }
    .end {
      flex: 1;
      text-align: center;
    }
  }
  .calendar-container {
    display: flex;
    flex-direction: column;
    .main {
      padding: 0 8px;
      color: rgba(0, 0, 0, .87);
      .tool-bar {
        font-size: 20px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .arrow {
          flex: 0 0 40px;
          font-size: 20px;
          text-align: center;
          height: 40px;
          line-height: 40px;
        }
      }
      .weeks {
        display: flex;
        color: rgba(0, 0, 0, .57);
        .week {
          flex: 1;
          text-align: center;
          height: 30px;
        }
      }
    }
  }
}

.date-box {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 240px;
  .date {
    flex: 0 0 14.285%;
    text-align: center;
    line-height: 36px;
    height: 36px;
    padding: 2px 0;
    &.start, &.end {
      background-color: rgb(64, 158, 255);
      color: #fff;
    }
    &.pass {
      background-color: lightgray;
    }
    &.light {
      color: lightgray;
    }
  }
}

.confirm-box {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .confirm, .cancel {
    width: 64px;
    height: 36px;
    color: #03a9f4;
    line-height: 36px;
    text-align: center;
    margin-right: 10px;
  }
  margin-bottom: 20px;
}
.input{
      -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    // font-size: inherit;
    height: 26px;
    line-height: 26px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
</style>